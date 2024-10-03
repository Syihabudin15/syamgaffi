"use client";

import ReactApexChart from "react-apexcharts";
// import tons from "@/datasets/ton";
// import moment from "moment";
export const dynamic = "force-dynamic";

export default function CandleStickChart({
  series,
}: // option,
{
  series: ApexAxisChartSeries;
  // option: any;
}) {
  // const series = [
  //   {
  //     data: [
  //       [new Date().getTime() + 100, 6593.34, 6600, 6582.63, 6600],
  //       [new Date().getTime() + 200, 6595.16, 6604.76, 6590.73, 6593.86],
  //       [new Date().getTime() + 300, 6595.16, 6604.76, 6590.73, 6594.86],
  //       [new Date().getTime() + 400, 6595.16, 6604.76, 6590.73, 6595.86],
  //       [new Date().getTime() + 500, 6595.16, 6604.76, 6590.73, 6596.86],
  //       [new Date().getTime() + 600, 6595.16, 6604.76, 6590.73, 6597.86],
  //       [new Date().getTime() + 700, 6595.16, 6604.76, 6590.73, 6598.86],
  //       [new Date().getTime() + 800, 6595.16, 6694.76, 6690.73, 6695.86],
  //     ],
  //   },
  // ];

  return (
    <div className="p-5 bg-white">
      {series && (
        <ReactApexChart
          series={series}
          // options={option}
          type="candlestick"
          height={350}
          key={"master-line"}
        />
      )}
    </div>
  );
}
