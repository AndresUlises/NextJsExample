import React from "react";
import { Image, Collapse, Typography } from "antd";
import { Row, Col } from "antd";

const { Title } = Typography;

const TermsConditions = () => {
  const { Panel } = Collapse;

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus leo, faucibus a odio at, condimentum varius ligula. Donec lobortis odio sed velit facilisis ultrices. Proin nunc nunc, viverra et lacus eget, iaculis tempus elit. Curabitur sagittis odio id varius aliquam. Duis finibus, purus et finibus posuere, enim arcu dapibus risus, ut accumsan dui enim nec lacus. Sed maximus non nibh eget accumsan. Pellentesque ut enim sodales, convallis lorem dignissim, consequat leo. In bibendum metus augue, non laoreet lacus placerat vel. Aliquam et lacus nisl. In feugiat eu nisi eu convallis. Nulla dignissim lacus ut blandit sodales. Curabitur quis ante facilisis, efficitur dui in, congue ex. In nec posuere augue. Nulla at vestibulum augue. Praesent id commodo lacus. Maecenas sed accumsan purus, sed tristique sapien. In eu quam elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ullamcorper ornare dui id efficitur. Praesent egestas a sapien et faucibus. Phasellus venenatis fringilla eros in auctor. Mauris posuere ante non nibh sagittis, porta accumsan magna viverra. Duis interdum nunc nec est sollicitudin, nec elementum erat mollis. Nullam non hendrerit velit. Nulla in orci malesuada, tincidunt metus vitae, pellentesque ligula.";
  return (
    <div>
      <Title style={{ textAlign: "center" }}>Terminos y Condiciones</Title>
      <Row>
        <Col span={7}></Col>
        <Col span={10}>
          <Image width="max" src="images/terms.jpg" />
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="INFORMACIÓN RELEVANTE">
              <p>{text}</p>
            </Panel>
            <Panel header="LICENCIA">
              <p>{text}</p>
            </Panel>
            <Panel header="USO NO AUTORIZADO">
              <p>{text}</p>
            </Panel>
            <Panel header="PROPIEDAD">
              <p>{text}</p>
            </Panel>
            <Panel header="POLÍTICA DE REEMBOLSO Y GARANTÍA">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
        <Col span={7}></Col>
      </Row>
    </div>
  );
};

export default TermsConditions;
