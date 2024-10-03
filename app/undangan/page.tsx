// import CandleStickChart from "@/components/homepage/CandeStickChart";
// import moment from "moment";
import { binance } from "@/datasets/Exchanges";

export default async function page() {
  console.info(await binance.futuresPrices());
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
  // const option = {
  //   chart: {
  //     width: 200,
  //     type: "candlestick",
  //   },
  //   xaxis: {
  //     labels: {
  //       show: true,
  //       formatter: function (val: string | number) {
  //         return moment(val).format("hh/mm/ss");
  //       },
  //     },
  //   },
  // };
  return (
    <div>
      <h1>Undangan Online</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        accusantium! Placeat distinctio minus ipsum neque mollitia fuga et velit
        repellat.
      </p>
      {/* {series && option && <CandleStickChart series={series} option={option} />} */}
    </div>
  );
}
