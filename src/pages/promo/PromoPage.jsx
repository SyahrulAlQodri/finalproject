import CardPromo from "../../component/Fragments/CardPromo/CardPromo";
import useGetData from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import Pagination from "../../component/Elements/Pagination/Pagination";
// import "./PromoPage.css";

export default function PromoPage() {
  const { getData } = useGetData();
  const [promos, setPromos] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(promos.length / itemsPerPage);
  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  });
  return (
    <Layout>
    <div className="mt-5 container-lg">
    <div className="px-3 d-flex justify-content-start align-items-baseline">
      <div>
        <i className="text-blue-500 bi bi-ticket-perforated-fill me-2 fs-2"></i> {/* Mengubah warna ikon menjadi biru */}
      </div>
      <div className="d-flex flex-column">
        <h3 className="m-0 text-blue-600 fw-bold">Special Promo For You!</h3> {/* Mengubah warna teks menjadi biru */}
        <p className="m-0 text-muted">
          &quot;Exclusive Offer Just for You! Don&apos;t Miss Out!&quot;
        </p>
      </div>
    </div>
    <div className="mt-4 row">
      {promos.slice(startIndex, endIndex).map((promo, index) => (
        <CardPromo promo={promo} key={promo.id} index={index} />
      ))}
    </div>
    <Pagination setPage={setPage} page={page} pages={totalPages} />
  </div>
  </Layout>
  );
}
