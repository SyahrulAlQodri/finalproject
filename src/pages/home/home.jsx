import { Link } from "react-router-dom";
import ActivityCarousel from "../../component/Fragments/ActivityCarousel/ActivityCarousel";
import BannerCarousel from "../../component/Fragments/BannerCarousel/BannerCarousel";
import CategoryCarousel from "../../component/Fragments/CategoryCarousel/CategortCarousel";
import PromoCarousel from "../../component/Fragments/PromoCarousel/PromoCarousel";
import Layout from "../../layouts/Layout";

import Animation from "../../utils/aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Animation();
  }, []);
  return (
    <Layout>
  <main className="py-5 mt-3 bg-white mt-lg-5">
    <div className="text-white bg-black row d-flex align-items-center justify-content-center header-section">
      <div
        className="col-lg-5 col-10 text-header"
        data-aos="slide-right"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h1 className="m-3 text-white fw-bold">
          Petualangan untuk Menjelajahi <br /> Dunia yang Indah
        </h1>
        <p className="m-3 lead d-none d-md-block">
          Mulai petualangan yang tak terlupakan melalui lanskap yang menakjubkan dan pertemuan yang menarik di dunia sekitar Anda.
        </p>
        <Link to="/activity" className="mb-3">
          <button className="px-4 py-2 m-3 text-white transition-colors duration-300 bg-blue-600 rounded-md shadow-md hover:bg-blue-700">
            Jelajahi Sekarang <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </Link>
      </div>
      <div
        className="col-lg-5 col-10 banner-container"
        data-aos="slide-left"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <BannerCarousel />
      </div> 
    </div>
   
    <div
      className="py-5 my-5 container-lg promo_section"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2 className="text-white fw-bold">Promo 1</h2>
          <p className="text-white">Dapatkan diskon 10% untuk semua produk</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2 className="text-white fw-bold">Promo 2</h2>
          <p className="text-white">Dapatkan harga spesial untuk semua produk elektronik</p>
        </div>
      </div>
      <PromoCarousel />
    </div>
    <div
      className="py-5 my-5 category_section"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <CategoryCarousel />
    </div>
    <div
      className="py-5 mt-5 activity_section"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-once="true"
    >
      <ActivityCarousel />
    </div>
  </main>
</Layout>
  )
}