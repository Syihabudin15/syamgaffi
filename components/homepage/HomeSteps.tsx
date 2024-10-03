"use client";

import { Steps } from "antd";

export default function HomeSteps() {
  return (
    <div>
      <Steps
        progressDot
        current={7}
        items={[
          {
            title: <span className="font-bold italic">Pilih Produk</span>,
            description: (
              <span>
                Pilih dan pastikan produk sesuai dengan kebutuhan dan
                permasalahan yang dihadapi.
              </span>
            ),
          },
          {
            title: <span className="font-bold italic">Diskusikan Masalah</span>,
            description: (
              <span>Diskusikan masalah yang sedang dihadapi kepada kami.</span>
            ),
          },
          {
            title: <span className="font-bold italic">Penawaran Solusi</span>,
            description: (
              <span>
                Kami menawarkan beberapa solusi yang mungkin sesuai untuk
                menyelesaikan masalah yang sedang dihadapi.
              </span>
            ),
          },
          {
            title: <span className="font-bold italic">Negosiasi Harga</span>,
            description: (
              <span>
                Negosiasikan harga serta bagaimana proses pembayaran dan
                pengerjaan yang disepakati agar tidak ada perselisihan pendapat.
              </span>
            ),
          },
          {
            title: <span className="font-bold italic">Pengerjaan</span>,
            description: (
              <span>
                Tim kami melakukan pekerjaan secara professional dengan waktu
                pengerjaan sesuai dengan kesepakatan.
              </span>
            ),
          },
          {
            title: <span className="font-bold italic">Testing</span>,
            description: (
              <span>
                Setelah tahap pengejaan selesai, pengguna wajib melakukan
                testing mengecek apakah pekerjaan kami sesuai dengan harapan.
              </span>
            ),
          },
          {
            title: <span className="font-bold italic">Selesai</span>,
            description: (
              <span>
                Tahap ini mengartikan bahwa kami dan pengguna telah selesai
                bekerja sama dalam masa yang telah ditentukan sebelumnya.
              </span>
            ),
          },
        ]}
      />
    </div>
  );
}
