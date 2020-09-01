import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import './collection-overview.style.scss';


const CollectionOverview = ({shopItems})=>  (
    <div className="collections-overview">
        {shopItems.map(({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
        ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    shopItems: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);