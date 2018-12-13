import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Image src="assets/about-pic.jpg" className="header-image" />
      <h3 className="about-us-header">About us</h3>
      <Row className="show-grid text-center">
        <Col xs={12} sm={12} className="shop-wrapper">
          <p>
            We can always carry this a step further. There's really no end to
            this. Get away from those little Christmas tree things we used to
            make in school. Maybe we got a few little happy bushes here, just
            covered with snow. There isn't a rule. You just practice and find
            out which way works best for you. Don't kill all your dark areas -
            you need them to show the light. There are no limits in this world.
            If these lines aren't straight, your water's going to run right out
            of your painting and get your floor wet. Be so very light. Be a
            gentle whisper. You could sit here for weeks with your one hair
            brush trying to do that - or you could do it with one stroke with an
            almighty brush. This is probably the greatest thing to happen in my
            life - to be able to share this with you. Exercising the
            imagination, experimenting with talents, being creative; these
            <br />
            <br />
            little bit can do so much. You want your tree to have some
            character. Make it special. When you buy that first tube of paint it
            gives you an artist license. It just happens - whether or not you
            worried about it or tried to plan it. We artists are a different
            breed of people. We're a happy bunch. A big strong tree needs big
            strong roots. Just let your mind wander and enjoy. This should make
            you happy. Do an almighty painting with us. But they're very easily
            killed. Clouds are delicate. In your imagination you can go anywhere
            you want. There he comes.
          </p>
        </Col>
        <h3 className="about-us-header">Meet the team</h3>

        <Col xs={12} sm={4} className="shop-wrapper">
          <Image src="assets/person1.jpg" circle className="team-pic" />
          <p>Hannah Bazooka</p>
          <p>Founder/CEO of DogeShop</p>
        </Col>
        <Col xs={12} sm={4} className="shop-wrapper">
          <Image src="assets/person2.jpg" circle className="team-pic" />
          <p>Henry Chimi</p>
          <p>Dog Trainer/Dog Whisperer</p>
        </Col>
        <Col xs={12} sm={4} className="shop-wrapper">
          <Image src="assets/person3.jpg" circle className="team-pic" />
          <p>Albert Shnizeweiger</p>
          <p>Store Manager</p>
        </Col>
      </Row>
      <h3>Pictures used on website references</h3>
      <p>https://croppola.com/</p>
      <p>https://petco.com</p>
    </div>
  );
};

export default About;
