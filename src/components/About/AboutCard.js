import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../pages/About.css";
import Card12 from "../Common/Card/Card12";

export class AboutCard extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  render() {
    return (
      <div className="offers pb-md-2 pt-md-0 pb-4">
        <div className="main-pad">
          <div class="container-fluid pt-md-4">
            <OwlCarousel
              items={2}
              className="owl-theme mt-md-5 pt-md-3 mt-3"
              loop
              nav
              autoplay
              margin={25}
              responsive={this.state.responsive}
            >
              <div>
                <Card12
                  image={"img/offers1.jpg"}
                  title=" FAN PARK "
                  para="A great place to meet friends, catch that big game, get work done, enjoy your coffee, scrumptious bites and more. Fan Park offers flexible floor space for events ranging from music performances to fashion shows and product launches. With restaurant and café Life thopia right alongside, it has a pretty amazing vibe. Phoenix Mall Of Asia."
                />
              </div>
              <div>
                <Card12
                  image={"img/offers1.jpg"}
                  title=" FAN PARK "
                  para="A great place to meet friends, catch that big game, get work done, enjoy your coffee, scrumptious bites and more. Fan Park offers flexible floor space for events ranging from music performances to fashion shows and product launches. With restaurant and café Life thopia right alongside, it has a pretty amazing vibe. Phoenix Mall Of Asia."
                />
              </div>
              <div>
                <Card12
                  image={"img/offers1.jpg"}
                  title=" FAN PARK "
                  para="A great place to meet friends, catch that big game, get work done, enjoy your coffee, scrumptious bites and more. Fan Park offers flexible floor space for events ranging from music performances to fashion shows and product launches. With restaurant and café Life thopia right alongside, it has a pretty amazing vibe. Phoenix Mall Of Asia."
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCard;
