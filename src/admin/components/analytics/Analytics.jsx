import React, { useEffect, useState } from "react";
import { Link, Typography } from "@mui/material";
import { Breadcrumbs } from "@mui/material";
import Performance from "./Performance";

const Analytics = () => {
  return (
    <>
      <section id="analytics" className="min-h-[90vh]">
        <div className="container-fluid p-10">
          {/* <Breadcrumbs page={"Dashboard"} color='text-white' category={""} /> */}
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Glotech-KSA
            </Link>
            <Typography sx={{ color: "text.primary" }}>Dashboard</Typography>
          </Breadcrumbs>
  
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
            <Performance title="Site Performance" />
            <Performance title="Server Load" />
            <Performance title="Database Health" />
          </div>
          {/* <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <AnalyticsCard number={totalBooks} title="Total Books" icon={<FaBook color={"#fa0032"} size={48} />} />
            <AnalyticsCard number={totalStudents} title="Total Students" icon={<PiStudentBold color={"#ffa828"} size={48} />} />
            <AnalyticsCard number={accountRequests} title="Account Requests" icon={<RiMapPinUserFill color={"#2c8a6b"} size={48} />} />
            <AnalyticsCard number={borrowedRequests} title="Borrowed Request" icon={<IoBookOutline color={"#0363a6"} size={48} />} />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Analytics;
