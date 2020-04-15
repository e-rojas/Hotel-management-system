import React from 'react';
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import 'materialize-css';
const CollapsibleAccordion = (props) => {
  return (
    <>
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="Images"
          icon={<Icon>image</Icon>}
          node="div"
        >
          <div className="row">
            <div className="col s3">
              <img
                style={{ width: '100%', height: '100%' }}
                src={props.images[0]}
                alt="hotel"
              />
            </div>
            <div className="col s3">
              <img
                style={{ width: '100%', height: '100%' }}
                src={props.images[1]}
                alt="hotel"
              />
            </div>
            <div className="col s3">
              <img
                style={{ width: '100%', height: '100%' }}
                src={props.images[2]}
                alt="hotel"
              />
            </div>
            <div className="col s3">
              <img
                style={{ width: '100%', height: '100%' }}
                src={props.images[3]}
                alt="hotel"
              />
            </div>
          </div>
        </CollapsibleItem>
      </Collapsible>
    </>
  );
};

export default CollapsibleAccordion;
