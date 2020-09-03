import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { initialCollections } from "../../redux/shop/shop.action";

import CollectionOverview from "../../components//collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true,
  //   };
  // }
  state = {
    loading: true,
  };

  componentDidMount() {
    const { initializeCollections } = this.props;
    const collectionRef = firestore.collection("collections");


    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-bcd56/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collection => console.log(collection));
    

    collectionRef.get().then((snapshot) => {
      const allMapedProducts = convertCollectionsSnapshotToMap(snapshot);
      initializeCollections(allMapedProducts);
      this.setState({ loading: false });
    });

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const allMapedProducts = convertCollectionsSnapshotToMap(snapshot);
    //     initializeCollections(allMapedProducts);
    //     this.setState({ loading: false });
    //   }
    // );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        {/* <Route
          exact
          path={`${match.path}`}
          component={CollectionOverview}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        ></Route> */}
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initializeCollections: (collectionsMap) =>
    dispatch(initialCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
