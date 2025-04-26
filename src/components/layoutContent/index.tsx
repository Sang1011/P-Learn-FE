import React from "react";

type LayoutContentProps = {
  layoutType: number;
  content1: React.ReactNode; 
  content2?: React.ReactNode;
};

function LayoutContent({
  layoutType,
  content1,
  content2
}: LayoutContentProps) {
    if(layoutType === 1) {
        return (
            <section
            style={{
              display: "flex",
              width: "100%",
              height: "100%"
            }}
            >
              <section
              className="content1"
              style={{
                flex: 7
              }}
              >
                {content1}
              </section>
              <section
              className="content2"
              style={{
                flex: 3
              }}
              >
                {content1}
              </section>
            </section>
        );
    }else if(layoutType === 2) {
        return (
            <section
            style={{
              display: "flex",
              width: "100%",
              height: "100%"
            }}
            >
              <section
              className="content1"
              style={{
                flex: 3
              }}
              >
                {content1}
              </section>
              <section
              className="content2"
              style={{
                flex: 7
              }}
              >
                {content2}
              </section>
            </section>
        );
    }
    else if(layoutType === 3) {
        return (
            <section
            style={{
              display: "flex",
              width: "100%",
              height: "100%"
            }}
            >
              <section
              className="content1"
              style={{
                flex: 5
              }}
              >
                {content1}
              </section>
              <section
              className="content2"
              style={{
                flex: 5
              }}
              >
                {content2}
              </section>
            </section>
        );
    }
}