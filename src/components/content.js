import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="روبونئو رو چک کن"
      description="میتونی از دو بخش بلاگ و ویکی روبونئو استفاده کنی"
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>بلاگ روبونئو</h3>
        <p style={{ color: COLORS.gray }}>
          توی این بخش میتونی به محتوا های آموزشی و بروز در زمینه الکترونیک دسترسی داشته باشی
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>ویکی روبونئو</h3>
        <p style={{ color: COLORS.gray }}>
          اینجا میتونی به توضیحات و دستور العمل های قطعات دسترسی پیدا کنی
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
