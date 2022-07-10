import { ArrowCircleRight, Laptop, MagnifyingGlass, Pencil } from "phosphor-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./style.css";

export function Roadmap() {
  return (
    <section className="roadmap" id="roadmap">
      <div>
        <h2>Roadmap</h2>
        <Tabs className="tabs-roadmap">
          <TabList className="list-roadmap">
            <Tab>Roadmap 01</Tab>
            <Tab>Roadmap 02</Tab>
            <Tab>Roadmap 03</Tab>
          </TabList>

          <TabPanel>
            <div className="panel-roadmap">
              <div>
                <h3>Título 01</h3>
                <MagnifyingGlass size={22} weight="duotone" />
              </div>
              <p> <span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
              <p>	<span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
              <p>	<span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-roadmap">
              <div>
                <h3>Título 02</h3>
                <Pencil size={22} weight="duotone" />
              </div>
              <p> <span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
              <p> <span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
              <p>	<span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-roadmap">
              <div>
                <h3>Título 03</h3>
                <Laptop size={22} weight="duotone" />
              </div>
              <p> <span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
              <p> <span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
              <p>	<span className="text-effect">&rArr; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, suscipit delectus ullam consectetur quis inventore
                iste doloribus, illo magnam quo impedit alias perferendis
                tempore quae corporis, soluta velit quos explicabo.
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}
