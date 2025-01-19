import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../css/Presentation.css";
import im from "../pictures/image.jpg";
import im2 from "../pictures/image2.jpg";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const boysData = [
    {
      institutionSymbol: 142935,
      name: "אורחות איש",
      classes: 4,
      disabilityType: "רצף האוטיזם",
      students: 29,
    },
    {
      institutionSymbol: 440529,
      name: "אמונת ציון",
      classes: 4,
      disabilityType: "הפרעות התנהגותיות רגשיות קשות",
      students: 34,
    },
    {
      institutionSymbol: 338152,
      name: "אמור אל הכוהנים",
      classes: 2,
      disabilityType: "מעוכבי התפתחות - 29",
      students: 17,
    },
    {
      institutionSymbol: 726612,
      name: "בויאן",
      classes: 2,
      disabilityType: "רצף האוטיזם",
      students: 6,
    },
    {
      institutionSymbol: 143883,
      name: "גירסת ישראל - גור",
      classes: 1,
      disabilityType: "רצף האוטיזם",
      students: 5,
    },
    {
      institutionSymbol: 143883,
      name: "גירסת ישראל - גור",
      classes: 1,
      disabilityType: "הפרעות נפשיות קשות - 28",
      students: 7,
    },
    {
      institutionSymbol: 113860,
      name: "דברות משה",
      classes: 2,
      disabilityType: 'ליקויי למידה ר"ב',
      students: 20,
    },
    {
      institutionSymbol: 160192,
      name: "המסורה",
      classes: 8,
      disabilityType: "מוגבלות שכלית בינונית",
      students: 59,
    },
    {
      institutionSymbol: 186361,
      name: 'ידיד ד"',
      classes: 8,
      disabilityType: "רצף האוטיזם",
      students: 56,
    },
    {
      institutionSymbol: 113852,
      name: "ימין ה' רוממה",
      classes: 2,
      disabilityType: "הפרעות התנהגותיות רגשיות קשות",
      students: 16,
    },
    {
      institutionSymbol: 113852,
      name: "ימין ה' רוממה",
      classes: 7,
      disabilityType: 'ליקויי למידה ר"ב',
      students: 77,
    },
    {
      institutionSymbol: 174664,
      name: "כלל חסידי",
      classes: 1,
      disabilityType: "הפרעות התנהגותיות רגשיות קשות",
      students: 9,
    },
    {
      institutionSymbol: 112896,
      name: "למען אחי",
      classes: 1,
      disabilityType: "רצף האוטיזם",
      students: 7,
    },
    {
      institutionSymbol: 747725,
      name: "מים חיים",
      classes: 2,
      disabilityType: 'ליקויי למידה ר"ב',
      students: 14,
    },
    {
      institutionSymbol: 747725,
      name: "מים חיים",
      classes: 1,
      disabilityType: "רצף האוטיזם",
      students: 10,
    },
    {
      institutionSymbol: 160671,
      name: "מנחת שלמה",
      classes: 1,
      disabilityType: 'ליקויי למידה ר"ב',
      students: 8,
    },
    {
      institutionSymbol: 442665,
      name: "משנת חיים",
      classes: 8,
      disabilityType: "הפרעות התנהגותיות רגשיות קשות",
      students: 94,
    },
    {
      institutionSymbol: 134676,
      name: "נחמת ציון",
      classes: 3,
      disabilityType: "הפרעות התנהגותיות רגשיות קשות",
      students: 23,
    },
    {
      institutionSymbol: 144287,
      name: "נתיבות שלמה",
      classes: 8,
      disabilityType: "רצף האוטיזם",
      students: 79,
    },
    {
      institutionSymbol: 144287,
      name: "נתיבות שלמה",
      classes: 3,
      disabilityType: "הפרעות התנהגותיות רגשיות קשות",
      students: 19,
    },
    {
      institutionSymbol: 112714,
      name: "סוכת דוד",
      classes: 1,
      disabilityType: "הפרעות התנהגותיות רגשיות קשות",
      students: 9,
    },
    {
      institutionSymbol: 174656,
      name: "עטרת שלמה",
      classes: 2,
      disabilityType: "מעוכבי התפתחות - 29",
      students: 16,
    },
    {
      institutionSymbol: 114140,
      name: "פאר יוסף",
      classes: 3,
      disabilityType: "הפרעות התנהגותיות רגשיות קשות",
      students: 22,
    },
    {
      institutionSymbol: 145466,
      name: "פקודת אלעזר",
      classes: 4,
      disabilityType: "רצף האוטיזם",
      students: 23,
    },
    {
      institutionSymbol: 145466,
      name: "פקודת אלעזר",
      classes: 4,
      disabilityType: 'ליקויי למידה ר"ב',
      students: 34,
    },
  ];

  const earlyChildhoodData = [
    { name: "מעוכבי שפה", students: 694, classes: 63 },
    { name: "רצף האוטיזם", students: 185, classes: 26 },
    { name: "מעוכבי התפתחות", students: 335, classes: 36 },
    { name: "מוגבלות בינונית מורכבת", students: 8, classes: 1 },
    { name: 'סי.פי. ונכויות פיזיות קשות ר"ב', students: 85, classes: 11 },
    { name: "מוגבלות קשה/עמוק/סעודי", students: 17, classes: 3 },
    { name: "מוגבלות בשמיעה/חרשות", students: 38, classes: 6 },
    { name: "מוגבלות בראייה/עיוורון", students: 15, classes: 3 },
    { name: "מוגבלות שכלית בינונית", students: 50, classes: 6 },
    { name: "הפרעות התנהגותיות/רגשיות קשות", students: 88, classes: 11 },
    { name: "מוגבלות שכלית קלה", students: 8, classes: 1 },
  ];

  const slides = [
    {
      title: "נתוני מחלקת חינוך מיוחד - עיריית ירושלים",
      content: () => (
        <div className="enhanced-cover-slide">
          <div className="logo-container">
            <img src={im} alt="עיריית ירושלים" />
          </div>
          <div className="logo-container">
            <img src={im2} alt="משרד החינוך" />
          </div>
          <div className="title-container">
            <h2 className="presentation-subtitle">מצגת נתונים שנתית</h2>
            <div className="separator"></div>
          </div>
          <div class="presenters-container">
            <h3>מגישות:</h3>
            <div class="presenter-list">
              <div class="presenter-info">
                <p>שולמית אריאלי</p>
                <p class="presenter-title">מפקחת חינוך מיוחד ירושלים</p>
              </div>
              <div class="presenter-info">
                <p>בתיה שפירא</p>
                <p class="presenter-title">ממונה חינוך מיוחד עיריית ירושלים</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "תוכן עניינים",
      content: () => (
        <div className="toc-slide">
          <div className="toc-container">
            {[
              { number: 1, title: "נתוני ועדות חדש לתשפ״ה", color: "purple" },
              { number: 2, title: "בחירת הורים בסוג מסגרת", color: "green" },
              { number: 3, title: "נתוני חינוך מיוחד", color: "blue" },
              { number: 4, title: "מקדמות בנים", color: "orange" },
              { number: 5, title: "מקדמות בנות", color: "pink" },
              { number: 6, title: "גיל הרך", color: "teal" },
            ].map((item, index) => (
              <div key={index} className={`toc-item ${item.color}`}>
                <div className={`toc-number ${item.color}`}>{item.number}</div>
                <div className="toc-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "נתוני ועדות לתשפ״ה",
      content: () => (
        <div className="data-slide">
          <div className="stats-grid">
            <div className="stats-card">
              <h3>גיל הרך חדש</h3>
              <div className="stats-content">
                <div className="stat-row">
                  <span>סה״כ חדשים:</span>
                  <span className="stat-value">1050</span>
                </div>
                <div className="stat-row">
                  <span>לא זכאי:</span>
                  <span className="stat-value">38</span>
                </div>
                <div className="stat-row">
                  <span>סל מוסדי:</span>
                  <span className="stat-value">158</span>
                </div>
                <div className="stat-row">
                  <span>זכאים לשירותי חינוך מיוחדים:</span>
                  <span className="stat-value">854</span>
                </div>
              </div>
            </div>
            <div className="stats-card">
              <h3>יסודי חדש</h3>
              <div className="stats-content">
                <div className="stat-row">
                  <span>סה״כ חדשים:</span>
                  <span className="stat-value">593</span>
                </div>
                <div className="stat-row">
                  <span>לא זכאי:</span>
                  <span className="stat-value">9</span>
                </div>
                <div className="stat-row">
                  <span>סל מוסדי:</span>
                  <span className="stat-value">62</span>
                </div>
                <div className="stat-row">
                  <span>זכאים לשירותי חינוך מיוחדים:</span>
                  <span className="stat-value">522</span>
                </div>
              </div>
            </div>
            <div className="stats-card">
              <h3>על יסודי חדש</h3>
              <div className="stats-content">
                <div className="stat-row">
                  <span>סה״כ חדשים:</span>
                  <span className="stat-value">303</span>
                </div>
                <div className="stat-row">
                  <span>לא זכאי:</span>
                  <span className="stat-value">4</span>
                </div>
                <div className="stat-row">
                  <span>סל מוסדי:</span>
                  <span className="stat-value">34</span>
                </div>
                <div className="stat-row">
                  <span>זכאים לשירותי חינוך מיוחדים:</span>
                  <span className="stat-value">265</span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ fontSize: "1.4rem", maxWidth: "1200px", margin: "0 auto" }}
          >
            <div
              className="stats-card frequencies"
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  color: "#2d3748",
                  textAlign: "center",
                }}
              >
                שכיחויות
              </h3>

              <div
                className="frequencies-grid"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {/* גיל הרך */}
                <div style={{ minWidth: "250px" }}>
                  <h4
                    style={{
                      fontSize: "1.6rem",
                      marginBottom: "1rem",
                      color: "#4a5568",
                      borderBottom: "2px solid #e2e8f0",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    גיל הרך
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span>שכיחות גבוהה:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      821
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span>שכיחות נמוכה:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      229
                    </span>
                  </div>
                </div>

                {/* יסודי */}
                <div style={{ minWidth: "250px" }}>
                  <h4
                    style={{
                      fontSize: "1.6rem",
                      marginBottom: "1rem",
                      color: "#4a5568",
                      borderBottom: "2px solid #e2e8f0",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    יסודי
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span>שכיחות גבוהה:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      821
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span>שכיחות נמוכה:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      229
                    </span>
                  </div>
                </div>

                {/* על יסודי */}
                <div style={{ minWidth: "250px" }}>
                  <h4
                    style={{
                      fontSize: "1.6rem",
                      marginBottom: "1rem",
                      color: "#4a5568",
                      borderBottom: "2px solid #e2e8f0",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    על יסודי
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span>שכיחות גבוהה:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      396
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span>שכיחות נמוכה:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      197
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Discussions Section */}
            <div
              className="total-discussions"
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <div className="stats-card">
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1.5rem",
                    color: "#2d3748",
                    textAlign: "center",
                  }}
                >
                  סה״כ דיונים לתלמידים חדשים
                </h3>

                <div
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "2rem",
                      marginBottom: "0.8rem",
                      borderBottom: "1px solid #e2e8f0",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <span>גיל הרך:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      1050
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "2rem",
                      marginBottom: "0.8rem",
                      borderBottom: "1px solid #e2e8f0",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <span>יסודי:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      593
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "2rem",
                      marginBottom: "0.8rem",
                      borderBottom: "1px solid #e2e8f0",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <span>על יסודי:</span>
                    <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                      303
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "2rem",
                      marginTop: "1rem",
                      paddingTop: "0.5rem",
                      borderTop: "2px solid #2b6cb0",
                      fontWeight: "bold",
                    }}
                  >
                    <span>סך הכל:</span>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2b6cb0",
                        fontSize: "1.6rem",
                      }}
                    >
                      1946
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="note-box">
            <p>הועדות מתקיימות למשך כל השנה, כך שאין התארגנות מיטבית.</p>
            <p>קליטת תלמידים מתבצעת לאורך כל השנה, ללא משאבים.</p>
          </div>
        </div>
      ),
    },
    {
      title: "בחירת הורים בתשפ״ד",
      content: () => (
        <div className="parents-choice-slide">
          <div className="choice-card">
            <h3>זכאים לשירותי חינוך מיוחדים - גיל הרך</h3>
            <div className="choice-grid">
              <div className="choice-stat">
                <p className="percentage blue">91%</p>
                <p>בחירת הורים לגן חינוך מיוחד</p>
                <p className="students">778 תלמידים</p>
              </div>
              <div className="choice-stat">
                <p className="percentage green">9%</p>
                <p>בחירת הורים לסל אישי</p>
                <p className="students">76 תלמידים</p>
              </div>
            </div>
          </div>
          <div className="choice-card">
            <h3>זכאים לשירותי חינוך מיוחדים - יסודי</h3>
            <div className="choice-grid three-cols">
              <div className="choice-stat">
                <p className="percentage blue">26%</p>
                <p>בחירת הורים לכוללני</p>
                <p className="students">136 תלמידים</p>
              </div>
              <div className="choice-stat">
                <p className="percentage green">30%</p>
                <p>בחירת הורים למקדמת</p>
                <p className="students">156 תלמידים</p>
              </div>
              <div className="choice-stat">
                <p className="percentage purple">44%</p>
                <p>בחירת הורים לסל אישי</p>
                <p className="students">230 תלמידים</p>
              </div>
            </div>
          </div>
          <div className="choice-card">
            <h3>זכאים לשירותי חינוך מיוחדים - על יסודי</h3>
            <div className="choice-grid three-cols">
              <div className="choice-stat">
                <p className="percentage blue">29%</p>
                <p>בחירת הורים לכוללני</p>
                <p className="students">78 תלמידים</p>
              </div>
              <div className="choice-stat">
                <p className="percentage green">14%</p>
                <p>בחירת הורים למקדמת</p>
                <p className="students">36 תלמידים</p>
              </div>
              <div className="choice-stat">
                <p className="percentage purple">57%</p>
                <p>בחירת הורים לסל אישי</p>
                <p className="students">157 תלמידים</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "נתוני חינוך מיוחד",
      content: () => (
        <div className="special-ed-data" style={{ padding: "20px" }}>
          {/* גיל הרך */}
          <div className="stats-section">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              גיל הרך
            </h3>
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ בעלויות:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  16
                </span>
              </div>
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ גנים:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  167
                </span>
              </div>
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ תלמידים:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  1523
                </span>
              </div>
            </div>
          </div>

          {/* כוללני */}
          <div className="stats-section">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              כוללני
            </h3>
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ מסגרות:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  35
                </span>
              </div>
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ כיתות:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  316
                </span>
              </div>
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ תלמידים:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  2268
                </span>
              </div>
            </div>
          </div>

          {/* יסודי - מקדמות */}
          <div className="stats-section">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              יסודי - מקדמות
            </h3>
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ מסגרות:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  33
                </span>
              </div>
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ כיתות:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  125
                </span>
              </div>
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ תלמידים:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  1055
                </span>
              </div>
            </div>
          </div>

          {/* על יסודי - מקדמות */}
          <div className="stats-section">
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              על יסודי - מקדמות
            </h3>
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ מסגרות:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  11
                </span>
              </div>
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ כיתות:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  52
                </span>
              </div>
              <div
                className="stat-item"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  padding: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span>מס׳ תלמידים:</span>
                <span
                  className="number"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#2c5282",
                  }}
                >
                  479
                </span>
              </div>
            </div>
          </div>

          {/* סך הכל תלמידים בתקצוב אישי */}
          <div className="stats-grid">
            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                סך הכל תלמידים בתקצוב אישי במסגרות החינוך הרגיל
              </h3>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "20px",
                    margin: "10px 0",
                  }}
                >
                  <span>פטור: </span>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#2c5282",
                    }}
                  >
                    269
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "20px",
                    margin: "10px 0",
                  }}
                >
                  <span>תרבותי יחודי: </span>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#2c5282",
                    }}
                  >
                    51
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "20px",
                    margin: "10px 0",
                  }}
                >
                  <span>מוכש"ר: </span>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#2c5282",
                    }}
                  >
                    1960
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "20px",
                    margin: "10px 0",
                  }}
                >
                  <span>סך הכל: </span>
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#2c5282",
                    }}
                  >
                    2280
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* מסגרות חינוך מיוחד בהשוואה לכל המסגרות */}
          <div className="framework-distribution" style={{ marginTop: "30px" }}>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              מסגרות חינוך מיוחד בהשוואה לכל המסגרות
            </h3>
            <div
              className="distribution-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div
                className="distribution-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "15px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span
                  className="percentage"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#2c5282",
                    marginBottom: "10px",
                  }}
                >
                  21%
                </span>
                <span style={{ fontSize: "18px", lineHeight: "1.4" }}>
                  גני חינוך מיוחד ביחס לכל המגזר החרדי
                </span>
              </div>
              <div
                className="distribution-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "15px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span
                  className="percentage"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#2c5282",
                    marginBottom: "10px",
                  }}
                >
                  24%
                </span>
                <span style={{ fontSize: "18px", lineHeight: "1.4" }}>
                  גני שפה ביחס לכל המגזר החרדי
                </span>
              </div>
              <div
                className="distribution-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "15px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span
                  className="percentage"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#2c5282",
                    marginBottom: "10px",
                  }}
                >
                  24%
                </span>
                <span style={{ fontSize: "18px", lineHeight: "1.4" }}>
                  בתי ספר כוללנים ביחס לכל המגזר החרדי
                </span>
              </div>
              <div
                className="distribution-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "15px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <span
                  className="percentage"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#2c5282",
                    marginBottom: "10px",
                  }}
                >
                  20%
                </span>
                <span style={{ fontSize: "18px", lineHeight: "1.4" }}>
                  כיתות מקדמות ביחס לכל המגזר החרדי
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "מקדמות בנים",
      content: () => (
        <div className="boys-programs">
          <div className="data-table-container boys-table-container">
            <h2 className="table-title boys-table-title">
              נתוני מקדמות בנים - תשפ״ה
            </h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>סמל מוסד</th>
                  <th>שם המוסד</th>
                  <th>מספר כיתות</th>
                  <th>סוג לקות</th>
                  <th>מספר תלמידים</th>
                </tr>
              </thead>
              <tbody>
                {boysData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.institutionSymbol}</td>
                    <td>{item.name}</td>
                    <td>{item.classes}</td>
                    <td>{item.disabilityType}</td>
                    <td>{item.students}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>סה״כ</td>
                  <td></td>
                  <td>
                    {boysData.reduce((sum, item) => sum + item.classes, 0)}
                  </td>
                  <td></td>
                  <td>
                    {boysData.reduce((sum, item) => sum + item.students, 0)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>{" "}
          <div className="summary-box">
            <h3>נתוני מקדמות בנים בתשפ״ה</h3>
            <div className="summary-stats">
              <div className="stat-box">
                <span className="stat-label">מס׳ מוסדות בנים:</span>
                <span className="stat-value"> 20 </span>
              </div>
              <div className="stat-box">
                <span className="stat-label">מספר כיתות מקדם:</span>
                <span className="stat-value"> 83 </span>
              </div>
              <div className="stat-box">
                <span className="stat-label">מס׳ תלמידים:</span>
                <span className="stat-value"> 693 </span>
              </div>
            </div>
          </div>
          <div className="performance-stats">
            <div className="performance-box">
              <h4>מוסדות שמפעילים כיתות בשכיחות גבוהה:</h4>
              <div className="stat-row">
                <span>מס׳ מוסדות: 14</span>
                <span>מס׳ כיתות: 49</span>
                <span>מס׳ תלמידים: 467</span>
                <span className="percentage">67%</span>
              </div>
            </div>
            <div className="performance-box">
              <h4>מוסדות שמפעילים כיתות בשכיחות נמוכה:</h4>
              <div className="stat-row">
                <span>מס׳ מוסדות: 9</span>
                <span>מס׳ כיתות: 34</span>
                <span>מס׳ תלמידים: 226</span>
                <span className="percentage">33%</span>
              </div>
            </div>{" "}
            <div className="performance-box">
              <h4>כיתות תקשורת מהווים 41% מכלל הכיתות בשכיחות נמוכה</h4>
            </div>{" "}
            <div className="performance-box">
              <h4>30% כיתות תקשורת בנים ביחס לכיתות מקדמות בעיר</h4>
            </div>{" "}
          </div>
          <div className="stats-grid">
            <div className="stats-card gradient-blue">
              <h3>כיתות רגיל בנים (מוכשר בירושלים)</h3>
              <div className="stats-content animate-slide-up">
                <div className="stat-row">
                  <span>ליט״א-אשכנזי ספרדי:</span>
                  <span className="stat-value">43</span>
                </div>
                <div className="stat-row">
                  <span>חסידי:</span>
                  <span className="stat-value">17</span>
                </div>
                <div className="stat-row">
                  <span>דתל״י:</span>
                  <span className="stat-value">11</span>
                </div>
              </div>
            </div>{" "}
            <div className="stats-card gradient-blue">
              <h3>כיתות מקדמות בנים (מוכשר בירושלים)</h3>
              <div className="stats-content animate-slide-up">
                <div className="stat-row">
                  <span>ליט״א-אשכנזי ספרדי:</span>
                  <span className="stat-value">13</span>
                </div>
                <div className="stat-row">
                  <span>חסידי:</span>
                  <span className="stat-value">6</span>
                </div>
                <div className="stat-row">
                  <span>דתל״י:</span>
                  <span className="stat-value">1</span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#E6F3FF",
              border: "2px solid #2B6CB0",
              borderRadius: "12px",
              padding: "1.5rem",
              maxWidth: "800px",
              margin: "2rem auto",
              boxShadow: "0 4px 6px rgba(43, 108, 176, 0.1)",
            }}
          >
            <h3
              style={{
                color: "#2B6CB0",
                fontSize: "1.8rem",
                marginBottom: "1rem",
                borderBottom: "2px solid #2B6CB0",
                paddingBottom: "0.5rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              סה״כ כיתות מקדמות
            </h3>
            <p
              style={{
                fontSize: "1.4rem",
                lineHeight: "1.6",
                color: "#2D3748",
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #BEE3F8",
              }}
            >
              סך הכל מסגרות מוכש"ר בירושלים ומתוכם רק{" "}
              <span
                style={{
                  color: "#2B6CB0",
                  fontWeight: "bold",
                  fontSize: "1.6rem",
                }}
              >
                20
              </span>{" "}
              מסגרות מפעילים כיתות מקדמות שזה אומר{" "}
              <span
                style={{
                  backgroundColor: "#2B6CB0",
                  color: "white",
                  padding: "0.2rem 0.8rem",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                28%
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "מקדמות בנות",
      content: () => (
        <div className="girls-programs" style={{ fontSize: "1.5rem" }}>
          <div className="data-table-container girls-table-container">
            <h2
              className="table-title girls-table-title"
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              נתוני מקדמות בנות - תשפ״ה
            </h2>
          </div>
          <div
            className="summary-box"
            style={{
              backgroundColor: "#f5f5f5",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <div className="stats-summary">
              <div className="stat-item">
                <h4
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  בסיס
                </h4>
                <div className="stat-details">
                  <div
                    className="stat-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    <span>מוסדות:</span>
                    <span>13</span>
                  </div>
                  <div
                    className="stat-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    <span>כיתות:</span>
                    <span>43</span>
                  </div>
                  <div
                    className="stat-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "1.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    <span>תלמידות:</span>
                    <span>383</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="additional-info" style={{ marginTop: "1.5rem" }}>
            <div
              className="info-box"
              style={{
                backgroundColor: "#f5f5f5",
                padding: "1.5rem",
                borderRadius: "8px",
              }}
            >
              <h4
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "0.5rem",
                }}
              >
                תלמידות מסיימות כיתה ח' - תשפ״ה
              </h4>
              <div
                className="stat-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  marginBottom: "0.5rem",
                  fontSize: "1.5rem",
                }}
              >
                <span>כיתות:</span>
                <span>5</span>
              </div>
              <div
                className="stat-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  marginBottom: "0.5rem",
                  fontSize: "1.5rem",
                }}
              >
                <span>תלמידות:</span>
                <span>44</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "נתוני הגיל הרך",
      content: () => (
        <div className="early-childhood-slide">
          <div className="chart-card">
            <h3>התפלגות גני הילדים</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earlyChildhoodData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" name="תלמידים" fill="#3B82F6" />
                  <Bar dataKey="classes" name="גנים" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="summary-card">
            <h3>סיכום נתונים</h3>
            <div className="summary-grid">
              {earlyChildhoodData.map((item) => (
                <div key={item.name} className="summary-item">
                  <h4>{item.name}</h4>
                  <p>תלמידים: {item.students}</p>
                  <p>גנים: {item.classes}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              padding: "1rem",
            }}
          >
            {/* Special Education Card */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                background: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
                borderRadius: "16px",
                padding: "2rem",
                color: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                גני חינוך מיוחד
              </h3>

              <div
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: "1.5rem 0",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                15%
              </div>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  marginBottom: "2rem",
                }}
              >
                גני חינוך מיוחד בהשוואה לגנים בירושלים
              </p>

              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "0.5rem",
                  fontSize: "1.2rem",
                }}
              >
                סה״כ גנים מיוחדים: 167
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "1rem",
                  borderRadius: "8px",
                  fontSize: "1.2rem",
                }}
              >
                סה״כ גנים רגילים: 1,132
              </div>
            </div>

            {/* Boys Statistics Card */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                background: "linear-gradient(135deg, #fb923c 0%, #ea580c 100%)",
                borderRadius: "16px",
                padding: "2rem",
                color: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.6rem",
                  marginBottom: "2rem",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                בנים - מסיימי גנים בתשפ'ה - עולים לכיתה א
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.2)",
                    padding: "1rem",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                  }}
                >
                  <span>שכיחות גבוהה:</span>
                  <span style={{ fontWeight: "bold" }}>293 (72%)</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.2)",
                    padding: "1rem",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                  }}
                >
                  <span>שכיחות נמוכה (כולל אוטיזם):</span>
                  <span style={{ fontWeight: "bold" }}>116 (28%)</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.2)",
                    padding: "1rem",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                  }}
                >
                  <span>אוטיזם:</span>
                  <span style={{ fontWeight: "bold" }}>78 (67%)</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.3)",
                    padding: "1rem",
                    borderRadius: "8px",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    marginTop: "1rem",
                  }}
                >
                  <span>סה״כ:</span>
                  <span>409</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: () => (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
            padding: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Animated background elements */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              background: `
              radial-gradient(circle at 20% 20%, white 1%, transparent 6%),
              radial-gradient(circle at 80% 30%, white 1%, transparent 6%),
              radial-gradient(circle at 40% 70%, white 1%, transparent 6%),
              radial-gradient(circle at 70% 80%, white 1%, transparent 6%)
            `,
              animation: "sparkle 4s ease-in-out infinite",
            }}
          />

          <div
            className="final-message"
            style={{
              maxWidth: "900px",
              background: "rgba(255, 255, 255, 0.95)",
              padding: "3rem",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              transform: "translateY(0)",
              animation: "float 6s ease-in-out infinite",
              border: "2px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#1e40af",
                textAlign: "center",
                lineHeight: "1.4",
                fontWeight: "bold",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                position: "relative",
                padding: "0 1rem",
              }}
            >
              מחלקת החינוך המיוחד החרדי:
              <br />
              <span
                style={{
                  background: "linear-gradient(to right, #1e40af, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "2.2rem",
                }}
              >
                מובילים באמונה, ביצירתיות ובתמיכה מותאמת
              </span>
            </h2>

            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                @keyframes sparkle {
                  0%, 100% { opacity: 0.1; transform: scale(1); }
                  50% { opacity: 0.2; transform: scale(1.1); }
                }
              `}
            </style>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="presentation-container">
      <div className="presentation-content">
        <div className="slide-container">
          <h1>{slides[currentSlide].title}</h1>

          {slides[currentSlide].content()}

          <div className="navigation">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={currentSlide === 0 ? "disabled" : ""}
            >
              <ChevronRight className="nav-icon" />
            </button>

            <span className="slide-counter">
              {currentSlide + 1} / {slides.length}
            </span>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={currentSlide === slides.length - 1 ? "disabled" : ""}
            >
              <ChevronLeft className="nav-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
