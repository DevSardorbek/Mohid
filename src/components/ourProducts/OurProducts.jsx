import React, { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import star from "../../assets/star.png";
import "../../sass/__ourProducts.scss";
import Pagination from "@mui/material/Pagination";
import { Box, Grid, Skeleton } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Padding } from "@mui/icons-material";
import Skaleton from "../skaleton/Skaleton";

const OurProducts = () => {
  const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1);

  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("page") || 6
  );
  const { data, refetch, isFetching } = useGetProductsQuery({
    limit: perPageCount,
    page,
  });

  let totalPagination = Math.ceil(data?.data?.count / perPageCount);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handleChangePagination = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };

  const handeChangePage = (e) => {
    setPerPageCount(e.target.value);

    localStorage.setItem("page", e.target.value);

    let result = Math.ceil((page * perPageCount) / value);
    setPage(result);
    sessionStorage.setItem("page-count", result);
  };
  return (
    <div className="ourProducts__wrapper">
      <div className="container">
        {isFetching ? (
          <Skaleton perPageCount={perPageCount} />
        ) : (
          <div className="ourProducts__section">
            {data?.data?.products?.map((product) => (
              <div key={product.id} className="ourtProducts__card">
                <div className="product__img">
                  <img src={product.urls[0]} alt="" />
                </div>
                <div className="product__info">
                  <h2>{product.title}</h2>
                  <img src={star} alt="" />
                  <div className="product__price">
                    <del>${product.oldPrice}</del>
                    <h3>${product.price}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <Pagination
            onChange={handleChangePagination}
            count={totalPagination}
            page={page}
            color="primary"
          />
        </Box>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Pages</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={perPageCount}
              label="Age"
              onChange={handeChangePage}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default OurProducts;
