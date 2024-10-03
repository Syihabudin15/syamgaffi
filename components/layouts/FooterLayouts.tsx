"use client";

import {
  EyeOutlined,
  FacebookFilled,
  InstagramFilled,
  MailFilled,
  PlayCircleOutlined,
  RadarChartOutlined,
  ShoppingOutlined,
  TikTokFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Link from "next/link";

export default function FooterLayouts() {
  return (
    <footer className="flex flex-col sm:flex-row gap-5 justify-between p-5 bg-white">
      <div className="flex-1">
        <Link
          href={"/"}
          title="Homepage SyamGaffi"
          className="flex flex-col border rounded shadow p-2"
          style={{ textShadow: "2px 2px 3px #aaa" }}
        >
          <span className="font-bold italic">SyamGaffi</span>
          <span
            className="italic text-xs opacity-80"
            style={{ marginLeft: 48, marginTop: -7 }}
          >
            Stores
          </span>
        </Link>
        <div className="my-3 text-xs" style={{ lineHeight: 2 }}>
          <span>Jl. Bandung Garut KM 150, </span>
          <span>Kp. Karapiak Kelurahan Nanjung Mekar, </span>
          <span>Kecamatan Rancaekek Kota Bandung Jawa Barat 40394</span>
        </div>
        <div className="text-xs italic flex">
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex gap-10">
              <span className="flex-1">Visited</span>
              <span className="flex-1">
                <EyeOutlined /> 0
              </span>
            </div>
            <div className="flex gap-10">
              <span className="flex-1">Ordered</span>
              <span className="flex-1">
                <ShoppingOutlined /> 0
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex gap-10">
              <span className="flex-1">Players</span>
              <span className="flex-1">
                <PlayCircleOutlined /> 0
              </span>
            </div>
            <div className="flex gap-10">
              <span className="flex-1">Games</span>
              <span className="flex-1">
                <RadarChartOutlined /> 0
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div>Layanan Kami</div>
      </div>
      <div className="flex-1">
        <div className="font-bold my-3">Sosial</div>
        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
            title="Facebook SyamGaffi Stores"
            className="italic flex gap-5"
          >
            <FacebookFilled />
            <span>SyamGaffiStores</span>
          </Link>
          <Link
            href={"/"}
            title="Instagram SyamGaffi Stores"
            className="italic flex gap-5"
          >
            <InstagramFilled />
            <span>@SyamGaffiStores</span>
          </Link>
          <Link
            href={"/"}
            title="Youtube SyamGaffi Stores"
            className="italic flex gap-5"
          >
            <YoutubeFilled />
            <span>SyamGaffi Stores</span>
          </Link>
          <Link
            href={"/"}
            title="Tiktok SyamGaffi Stores"
            className="italic flex gap-5"
          >
            <TikTokFilled />
            <span>@SyamGaffiStores</span>
          </Link>
          <Link
            href={"/"}
            title="Email SyamGaffi Stores"
            className="italic flex gap-5"
          >
            <MailFilled />
            <span>Official@syamgaffi.store</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
