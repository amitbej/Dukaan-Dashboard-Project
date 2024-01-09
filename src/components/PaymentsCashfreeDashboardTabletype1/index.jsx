import React from "react";

import { Text } from "components";

const PaymentsCashfreeDashboardTabletype1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-center w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <Text
                className="text-blue-800 text-sm w-auto"
                size="txtInterMedium14Blue800"
              >
                {props?.userlanguage}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentsCashfreeDashboardTabletype1.defaultProps = { userlanguage: "#281209 " };

export default PaymentsCashfreeDashboardTabletype1;
