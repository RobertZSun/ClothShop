import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.style.scss";

const CollectionPage = ({ collectionItems }) => {
// const CollectionPage = (props) => {
  // console.log('props: ', props);
  // const { collectionItems } = props;
  // console.log('collectionItems : ', collectionItems);
  const { title, items } = collectionItems;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collectionItems: selectCollection(ownProps.match.params.collectionId)(
      state
    ),
  };
};

export default connect(mapStateToProps)(CollectionPage);
