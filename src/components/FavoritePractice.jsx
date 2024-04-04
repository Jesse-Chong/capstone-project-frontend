import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiSolidPrinter } from "react-icons/bi";
import { RiFileDownloadFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LiaStarSolid } from "react-icons/lia";
import Scroll from "./Scroll";

function favorite() {
  const { t } = useTranslation();
  const [show, setShow] = useState([]);
  console.log(show);
  const API = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchShow();
  }, []);

  async function fetchShow() {
    try {
      let result = await axios.get(`${API}/favoritepractice`);
      console.log(result.data);
      setShow(result.data);
      console.log(show);
    } catch (error) {
      console.log(error);
    }
  }

  function deleteButton() {
    // try {
    //   let result = await axios.delete(`${API}/favorite/${id}`);
    //   console.log(result);
    //   navigate("/favorite");
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      fetch(`${API}/favoritepractice/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(show),
      })
        .then((res) => res.json())
        .then(() => navigate("/favoritepractice"));
    } catch (error) {
      return error;
    }
  }
  // useEffect(() => {
  // function fetchOneFavorite() {
  //   try {
  //     fetch(`${API}/favorite/${id}`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setShow(res);
  //       });
  //   } catch (error) {
  //     return error;
  //   }
  // }
  // fetchOneFavorite();
  // // }, []);

  // const deleteButton = () => {
  //   const confirmDeleteBox = window.confirm(
  //     "🚨 WAIT!!!!! Are you sure you want to 💥 delete 💥 this favorite? 🚨"
  //   );
  //   if (!confirmDeleteBox) {
  //     return;
  //   }
  //   try {
  //     fetch(`${API}/favorite/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(show),
  //     })
  //       .then((res) => res.json())
  //       .then(() => navigate("/favorite"));
  //   } catch (error) {
  //     return error;
  //   }
  // };

  return (
    <div>
      <h2 className="m-5">{t("favorite.my_documents")}</h2>
      <table className="table table-hover table-bordered text-center m-5">
        <thead className="fs-3" style={{ backgroundColor: "#38b6ff" }}>
          <tr>
            <th scope="col">{t("favorite.number")}</th>
            <th scope="col">{t("favorite.favorite")}</th>
            <th scope="col">{t("favorite.category")}</th>
            <th scope="col">{t("favorite.name")}</th>
            <th scope="col">{t("favorite.document")}</th>
            <th scope="col">{t("favorite.delete")}</th>
          </tr>
        </thead>
        <tbody>
          {show.map((item, index) => {
            return (
              <tr key={index} className="table-row">
                <td>{item.favorite_id}</td>
                <td>
                  {item.is_favorite ? (
                    <span>
                      <LiaStarSolid style={{ color: "#38b6ff" }} />
                    </span>
                  ) : (
                    <span>{""}</span>
                  )}
                </td>
                <td>{item.category}</td>
                <td>{item.name}</td>

                <td>
                  <button>
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <BiSolidPrinter style={{ color: "#38b6ff" }} />{" "}
                      {t("favorite.print_/_download")}{" "}
                      <RiFileDownloadFill style={{ color: "#38b6ff" }} />
                    </a>
                  </button>
                </td>
                <td>
                  <button onClick={deleteButton} style={{ color: "black" }}>
                    {t("favorite.favorite")}{" "}
                    <RiDeleteBin5Fill style={{ color: "red" }} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Scroll />
    </div>
  );
}

export default favorite;
