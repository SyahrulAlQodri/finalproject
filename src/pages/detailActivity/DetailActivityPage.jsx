import useGetData from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";

export default function DetailActivityPage() {
  const { getData } = useGetData();
  const [activity, setActivity] = useState({});
  const [mapHtml, setMapHtml] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getData(`activity/${id}`).then((res) => setActivity(res.data.data));
  }, []);
  console.log(activity);

  useEffect(() => {
    getData(`activity/${id}`).then((res) => {
      setMapHtml(res.data.data.location_maps);
    });
  }, [activity]);

  return (
    <Layout>
      <div className="py-3 mt-5 container-lg"></div>
      <div className="container-lg">
        <h1 className={` text-center`}>{activity.title}</h1>
        <div className="row">
          {activity?.imageUrls?.map((image) => (
            <div key={image} className="py-3 mx-auto col-lg-6 col-10">
              <img
                src={image}
                alt={activity.title}
                className={`image img-fluid`}
              />
            </div>
          ))}
        </div>
        <div className="container-lg row ">
        <div className="my-3 border border-2 border-success"></div>
          <h2>Information</h2>
          <div className="mt-3 col-10">
            <p>
              <span className="fw-bold"> Description : </span>{" "}
              {activity.description}
            </p>
            <p>
              <span className="fw-bold"> Price : </span>
              {activity?.price?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p>
              <span className="fw-bold"> Price Discount : </span>
              {activity?.price_discount?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p>
              <span className="fw-bold">Facilities : </span>
              {activity.facilities}
            </p>
            <p>
              <span className="fw-bold"> Rating : </span>
              <i className="bi bi-star-fill text-warning"></i> {activity.rating}
              /5 (<i className="bi bi-person-fill"></i>
              {activity.total_reviews} Reviews)
            </p>
          </div>
          <div className="my-3 border border-2 border-success"></div>
          <div className="mt-3 row container-lg">
            <h2> Location</h2>
            <div className="mx-auto col-lg-6 col-10">
              <p>
                <span className="fw-bold"> Address : </span> {activity.address}
              </p>
              <p>
                <span className="fw-bold"> City : </span> {activity.city}
              </p>
              <p>
                <span className="fw-bold"> Province : </span>{" "}
                {activity.province}
              </p>
            </div>
            <div className="mx-auto col-lg-6 col-10">
              <div className="map_container">
                <div
                  dangerouslySetInnerHTML={{ __html: mapHtml }}
                  id="map-container"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 border border-2 border-success"></div>

        <div className="mt-3 container-lg">
          <p>
            <span className="fw-bold"> Category : </span>{" "}
            {activity?.category?.name}
          </p>
          <div className="col-lg-3 col-8">
            <img
              src={activity?.category?.imageUrl}
              className="rounded img-fluid"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
