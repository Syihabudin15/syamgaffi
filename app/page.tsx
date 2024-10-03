import HomeSteps from "@/components/homepage/HomeSteps";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section
        title="Banner atas"
        className="flex gap-2 text-center border items-center flex-col sm:flex-row p-5"
      >
        <div className="flex-1">
          <div style={{ lineHeight: 0, textShadow: "2px 2px 3px #aaa" }}>
            <h1 className="font-bold text-3xl italic">SyamGaffi</h1>
            <span className="italic text-xs ms-32 font-bold opacity-90">
              Stores
            </span>
          </div>
          <div style={{ lineHeight: 2 }}>
            <p className="flex flex-col mt-5">
              <span>
                <Link
                  href={"/undangan"}
                  title="SyamGaffi Jasa Pembuatan Undangan Digital"
                  className="hover:text-blue-500 hover:border-b-2 border-blue-500"
                >
                  Undangan Digital
                </Link>
                ,{" "}
                <Link
                  href={"/website"}
                  title="SyamGaffi Jasa Pembuatan Website"
                  className="hover:text-blue-500 hover:border-b-2 border-blue-500"
                >
                  Website
                </Link>
                ,{" "}
                <Link
                  href={"/website"}
                  title="SyamGaffi Jasa Pembuatan Sistem Informasi Berbasis Web"
                  className="hover:text-blue-500 hover:border-b-2 border-blue-500"
                >
                  Sistem
                </Link>
                ,
              </span>
              <span>
                <Link
                  href={"/ta"}
                  title="SyamGaffi Jasa Pembuatan Tugas Akhir"
                  className="hover:text-blue-500 hover:border-b-2 border-blue-500"
                >
                  Tugas Akhir
                </Link>
                ,{" "}
                <Link
                  href={"/apps"}
                  title="SyamGaffi Jasa Pembuatan Applikasi Android"
                  className="hover:text-blue-500 hover:border-b-2 border-blue-500"
                >
                  Aplikasi
                </Link>{" "}
                &{" "}
                <Link
                  href={"/bot"}
                  title="SyamGaffi Jasa Pembuatan Bot Telegram, Whatsapp dan discord"
                  className="hover:text-blue-500 hover:border-b-2 border-blue-500"
                >
                  Bot
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="flex-1">Gambar Kanan</div>
      </section>
      <section title="Tentang SyamGaffi" className="my-5 py-5 px-5 sm:px-32">
        <div className="font-bold text-xl sm:text-2xl my-3">
          <h2>Tentang SyamGaffi</h2>
        </div>
        <div className="my-5">
          <p style={{ lineHeight: 2, textAlign: "justify" }}>
            <span className="font-bold">SyamGaffi</span> merupakan sebuah
            perusahaan yang berpengalaman dalam jasa pembuatan{" "}
            <Link
              href={"/undangan"}
              title="SyamGaffi Jasa Pembuatan Undangan Digital atau Undangan Online"
              className="hover:text-blue-500 hover:border-b-2 border-blue-500"
            >
              Undangan Digital
            </Link>
            ,{" "}
            <Link
              href={"/website"}
              title="SyamGaffi Jasa Pembuatan Website"
              className="hover:text-blue-500 hover:border-b-2 border-blue-500"
            >
              Website
            </Link>
            ,{" "}
            <Link
              href={"/website"}
              title="SyamGaffi Jasa Pembuatan Sistem Informasi"
              className="hover:text-blue-500 hover:border-b-2 border-blue-500"
            >
              Sistem Informasi
            </Link>
            ,{" "}
            <Link
              href={"/ta"}
              title="SyamGaffi Jasa Pembuatan Tugas Akhir"
              className="hover:text-blue-500 hover:border-b-2 border-blue-500"
            >
              Tugas Akhir
            </Link>
            ,{" "}
            <Link
              href={"/apps"}
              title="SyamGaffi Jasa Pembuatan Aplikasi Android"
              className="hover:text-blue-500 hover:border-b-2 border-blue-500"
            >
              Aplikasi Android
            </Link>
            , dan{" "}
            <Link
              href={"/bot"}
              title="SyamGaffi Jasa Pembuatan Bot Telegram, Whatsapp dan discord"
              className="hover:text-blue-500 hover:border-b-2 border-blue-500"
            >
              Bot
            </Link>{" "}
            <span className="opacity-70 italic">
              (whatsapp, telegram, discord)
            </span>{" "}
            yang telah berdiri sejak Januari 2021 dengan tim yang ahli dan
            berpengalaman kami mampu untuk terus berkembang demi mempermudah
            orang-orang dalam memenuhi kebutuhannya. Selain itu, kami juga
            memiliki produk yang dapat digunakan oleh semua kalangan usia yaitu{" "}
            <Link
              href={"/game"}
              title="GaffiGame Play To Earn Indonesia"
              className="hover:text-blue-500 hover:border-b-2 border-blue-500 font-bold italic"
            >
              GaffiGame
            </Link>{" "}
            dengan menerapkan konsep{" "}
            <Link
              href={
                "/blog/game/apa-itu-play-to-earn-(p2e)-penghasilan-dari-game"
              }
              title="Apa Itu Play To Earn (P2E) Penghasilan Dari Game"
              className="hover:text-blue-500 hover:border-b-2 border-blue-500 font-bold italic"
            >
              Play to Earn (P2E)
            </Link>{" "}
            yang mana setiap permainan yang dimainkan akan dibayar dengan
            imbalan rupiah tergantung besaran kontribusi pemain dalam permainan
            ini.
          </p>
        </div>
      </section>
      <section
        title="Produk dan Layanan SyamGaffi"
        className="my-5 py-5 px-5 sm:px-32"
      >
        <div className="font-bold text-xl sm:text-2xl my-3">
          <h2>Produk dan Layanan</h2>
        </div>
        <div className="my-5">
          <p style={{ lineHeight: 2, textAlign: "justify" }}>
            Proses yang kami jalankan disetiap produk mengedepankan transparansi
            dan keterbukaan kepada pengguna agar menghindari keraguan,
            kekecewaan ataupun masalah yang mungkin datang dikemudian hari.
            Berikut beberapa produk dan layanan yang tersedia pada platform
            kami.
          </p>
        </div>
        <ul className="flex justify-around items-center gap-5 flex-wrap my-10">
          <li className="border rounded shadow p-3 h-36 w-36 sm:w-52 sm:h-52 flex justify-center items-center text-center font-bold italic">
            <Link
              href={"/undangan"}
              title="SyamGaffi Jasa Pembuatan Undangan Digital"
            >
              Undangan Digital
            </Link>
          </li>
          <li className="border rounded shadow p-3 h-36 w-36 sm:w-52 sm:h-52 flex justify-center items-center text-center font-bold italic">
            <Link href={"/website"} title="SyamGaffi Jasa Pembuatan Website">
              Website
            </Link>
          </li>
          <li className="border rounded shadow p-3 h-36 w-36 sm:w-52 sm:h-52 flex justify-center items-center text-center font-bold italic">
            <Link href={"/ta"} title="SyamGaffi Jasa Pembuatan Tugas Akhir">
              Tugas Akhir
            </Link>
          </li>
          <li className="border rounded shadow p-3 h-36 w-36 sm:w-52 sm:h-52 flex justify-center items-center text-center font-bold italic">
            <Link
              href={"/apps"}
              title="SyamGaffi Jasa Pembuatan Aplikasi Android"
            >
              Aplikasi Android
            </Link>
          </li>
          <li className="border rounded shadow p-3 h-36 w-36 sm:w-52 sm:h-52 flex justify-center items-center text-center font-bold italic">
            <Link
              href={"/bot"}
              title="SyamGaffi Jasa Pembuatan Bot Whatsapp, Telegram dan Discord"
            >
              BOT
            </Link>
          </li>
          <li className="border rounded shadow p-3 h-36 w-36 sm:w-52 sm:h-52 flex justify-center items-center text-center font-bold italic">
            <Link href={"/gaffi-game"} title="SyamGaffi Play To Earn Gamming">
              Play To Earn
            </Link>
          </li>
        </ul>
      </section>
      <section
        title="Produk dan Layanan SyamGaffi"
        className="my-10 py-5 px-5 sm:px-32"
      >
        <HomeSteps />
      </section>
      <section title="Portfolio SyamGaffi" className="my-10 py-5 px-5 sm:px-32">
        <div className="font-bold text-xl sm:text-2xl my-3">
          <h2>Portfolio</h2>
        </div>
      </section>
      <section title="Portfolio SyamGaffi" className="my-10 py-5 px-5 sm:px-32">
        <div className="font-bold text-xl sm:text-2xl my-3">
          <h2>Play To Earn (P2E)</h2>
        </div>
      </section>
    </div>
  );
}
