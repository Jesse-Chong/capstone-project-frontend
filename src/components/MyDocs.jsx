import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiSolidPrinter } from "react-icons/bi";
import { RiFileDownloadFill } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LiaStarSolid } from "react-icons/lia";
import { FaFolderPlus } from "react-icons/fa";
import Scroll from "./Scroll";
import Footer from "../pages/Footer";

const API = import.meta.env.VITE_BASE_URL;

function MyDocs({ user, token }) {
  const { t } = useTranslation();
  const [userFav, setUserFav] = useState([]);
  console.log(userFav);
  const API = import.meta.env.VITE_BASE_URL;
  //     let {id}=useParams();
  // let navigate = useNavigate();

  useEffect(() => {
    fetchUserFav();
  }, []);

  async function fetchUserFav() {
    try {
      let result = await axios.get(`${API}/users-favorites/${user.user_id}`);
      //console.log(result.data);
      setUserFav(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUserFav(userId, favoriteId) {
    // console.log("test123")
    try {
      const confirmDeleteBox = window.confirm(
        `🚨 WAIT!!!!! Are you sure you want to delete? 🚨`
      );
      if (!confirmDeleteBox) {
        return;
      }
      let result = await axios.delete(
        `${API}/users-favorites/${userId}/${favoriteId}`
      );
      console.log(result);
      setUserFav(userFav.filter((item) => item.favorite_id !== favoriteId));
      navigate("/favorite/mydocs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2 className="m-5">
        {user.first_name} {user.last_name}'s {t("mydoc.saved_documents")}
      </h2>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-hover table-bordered text-center my-5 mx-auto">
            <thead className="fs-3" style={{ backgroundColor: "#38b6ff" }}>
              <tr>
                <th scope="col">{t("favorite.category")}</th>
                <th scope="col">{t("favorite.name")}</th>
                <th scope="col">{t("favorite.document")}</th>
                <th scope="col">{t("favorite.delete")}</th>
              </tr>
            </thead>
            <tbody>
              {userFav.map((el) => {
                return (
                  <tr key={el.index} className="table-row">
                    <td>{el.category}</td>
                    <td>{el.name}</td>
                    <td>
                      <button>
                        <a
                          href={el.image}
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
                      <button
                        onClick={() =>
                          deleteUserFav(el.user_id, el.favorite_id)
                        }
                        style={{ color: "black" }}
                      >
                        {t("favorite.delete")}{" "}
                        <RiDeleteBin5Fill style={{ color: "red" }} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button className="m-5">
        <Link
          to={"/favorite"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {t("mydoc.back_to_documents")}
        </Link>
      </button>
      <Scroll />
      <Footer />
    </div>
  );
}

export default MyDocs;
