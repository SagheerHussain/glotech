import React, { useEffect, useState } from "react";
import { Timeline } from "../ui/timeline";
import { useTranslation } from "react-i18next";
import { MdVerified } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import { Ri24HoursLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
// import { getServiceByCategory } from "../../services/service";
import { getCategoryBySlug } from "../../services/categories";
import { getServiceByCategory } from "../../services/service";

export function ServiceDetail({ params }) {
  const { t } = useTranslation();

  // const [servicesData, setServicesData] = useState({});
  const [services, setServices] = useState([]);
  const [categId, setCategId] = useState("");

  const icons = [
    { icon: <MdVerified /> },
    { icon: <Ri24HoursLine /> },
    { icon: <IoMdHappy /> },
    { icon: <FaMedal /> },
    { icon: <FaBalanceScale /> },
    { icon: <MdCleaningServices /> },
  ];

  // Get Service By Category
  const getCategoryData = async () => {
    try {
      const { data } = await getCategoryBySlug(params);
      setCategId(data?._id);
      if (data) {
        getServiceData(data?._id);
      }
      console.log("category data === >>>> ", data);
    } catch (error) {
      console.log(error);
    }
  };

  const getServiceData = async (id) => {
    try {
      const { data } = await getServiceByCategory(id);
      if (data.length > 0) {
        setServices(data);
        console.log("data here === >>>> ", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, [params, categId]);


  return (
    <>
      <section id="commitment" className="py-20 bg-[#fff] overflow-hidden">
        <div className="container">
          {services.length > 0 && (
            <Timeline
              data={services}
              icons={icons}
              title={services[0]?.name?.en}
              description={services[0]?.description?.en}
            />
          )}
        </div>
      </section>
    </>
  );
}
