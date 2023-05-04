import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "swiper/swiper-bundle.css";
import research from "../../data/research";
import cafi from "../../data/cafi";
import "./Cafi.css";
import SwiperCore, { Navigation, Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Mousewheel]);

export default function Cafi() {
  const match = useMediaQuery("(max-width: 500px)");

  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <div className="cafi">
      <div className="cafi-header">
        <div className="cafi-header-heading">
          <div className="cafi-title">
            <h1>CAFI Projects</h1>
            <p>
              Introducing CAFI: A Collaborative Solution to Tackle Food
              Injustice
            </p>
          </div>
        </div>
      </div>
      <div className="cafi-list-section">
        <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
          What is CAFI?
        </Typography>
        <div className="cafi-list-desc">
          <Typography className="cafi-typo" variant="body1">
            At the heart of our proposed initiative lies an ambitious vision: to
            create an innovation hub that will revolutionize the way we think
            about food justice. Our aim is to leverage the unique strengths of
            our community partners and the diverse expertise of our
            cross-disciplinary team to dismantle food apartheid and ensure that
            access to high-quality, healthy food is no longer determined by zip
            code. We believe that at the intersection of different disciplines
            lies the key to solving one of the most pressing challenges of our
            time: the equitable distribution of food resources.
          </Typography>
          <Typography className="cafi-typo" variant="body1">
            With a focus on addressing inequities in access to healthy food, our
            team is committed to designing and implementing innovative research
            and educational efforts that tackle food injustice from a variety of
            angles. By harnessing the power of engineering, life sciences,
            social sciences, public health, business, and education, we aim to
            build solutions that will have both local and global impact.
          </Typography>
          <Typography className="cafi-typo" variant="body1">
            Our collaborative, multidisciplinary team will be composed of
            faculty, staff, students, and community partners who are united in
            their commitment to driving positive change in pursuit of food
            equality. By leveraging the experience of our community partners and
            the knowledge and expertise of our UNO community, we will create a
            catalyst for change that has the potential to transform our food
            system.
          </Typography>
          <Typography className="cafi-typo" variant="body1">
            Join us in our mission to break down the barriers that currently
            exist in our food system and create a more equitable future for all.
          </Typography>
        </div>
        {/* <ul className="cafi-list">
          {research.map(({ id, title, desc, link, citations }) => {
            return <li key={id} className="cafi-listitem"></li>;
          })}
        </ul> */}
      </div>
      <div className="cafi-image">
        <img src="/images/CAFI.png" alt="cafi" width="600px" />
      </div>
      <Typography variant="h4" align="center" style={{ margin: "20px 0" }}>
        Blogs
      </Typography>
      <div className="cafi-swiper-blog">
        <Swiper
          // mousewheel={true}
          navigation={true}
          pagination
          spaceBetween={0}
          slidesPerView={2}
          breakpoints={{
            1600: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 1,
            },
          }}
        >
          {cafi.map((img) => {
            return (
              <SwiperSlide key={img.url}>
                <Card
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                  sx={{ maxWidth: 500, height: match ? 610 : 520 }}
                >
                  <Link className="cafi-link" to={`/cafi/${img.id}`}>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={img.url}
                      title={img.url}
                    />
                  </Link>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {img.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {img.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/cafi/${img.id}`}>
                      <Button size="small">Learn More</Button>
                    </Link>
                  </CardActions>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
