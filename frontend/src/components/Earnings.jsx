import React from "react";
import { IoStatsChart } from "react-icons/io5";
import {EarningsCard,CardContent,Chart,EarningsText,Earning,EarningsIncrease} from './styled/Earnings.styled';

function Earnings() {
  return (
    <EarningsCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <EarningsText>Earnings</EarningsText>
        <Earning>$7,890</Earning>
        <EarningsIncrease>+ 10% since last month</EarningsIncrease>
      </CardContent>
    </EarningsCard>
  );
}

export default Earnings;