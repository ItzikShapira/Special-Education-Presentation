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
          <div className="presenters-container">
            <h3>מגישות:</h3>
            <div className="presenter-info">
              <p>שולמית אריאלי</p>
              <p className="presenter-title">מפקחת חינוך מיוחד ירושלים</p>
            </div>
            <div className="presenter-info">
              <p>בתיה שפירא</p>
              <p className="presenter-title">
                ממונה חינוך מיוחד עיריית ירושלים
              </p>
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
          <div className="note-box">
            <p>הועדות מתקיימות למשך כל השנה, כך שאין התארגנות מיטבית.</p>
            <p>קליטת תלמידים מתבצעת לאורך כל השנה, ללא משאבים.</p>
          </div>
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
                  <span>שירותי חינוך מיוחדים:</span>
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
                  <span>שירותי חינוך מיוחדים:</span>
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
                  <span>שירותי חינוך מיוחדים:</span>
                  <span className="stat-value">265</span>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-card frequencies">
            <h3>שכיחויות</h3>
            <div className="frequencies-grid">
              <div>
                <h4>גיל הרך</h4>
                <div className="stat-row">
                  <span>שכיחות גבוהה:</span>
                  <span className="stat-value">821</span>
                </div>
                <div className="stat-row">
                  <span>שכיחות נמוכה:</span>
                  <span className="stat-value">229</span>
                </div>
              </div>
              <div>
                <h4>יסודי</h4>
                <div className="stat-row">
                  <span>שכיחות גבוהה:</span>
                  <span className="stat-value">821</span>
                </div>
                <div className="stat-row">
                  <span>שכיחות נמוכה:</span>
                  <span className="stat-value">229</span>
                </div>
              </div>
              <div>
                <h4>על יסודי</h4>
                <div className="stat-row">
                  <span>שכיחות גבוהה:</span>
                  <span className="stat-value">396</span>
                </div>
                <div className="stat-row">
                  <span>שכיחות נמוכה:</span>
                  <span className="stat-value">197</span>
                </div>
              </div>
            </div>
          </div>

          <div className="total-discussions">
            <div className="stats-card">
              <h3>סה״כ דיונים לתלמידים חדשים</h3>
              <div className="stats-content">
                <div className="stat-row">
                  <span>גיל הרך</span>
                  <span className="stat-value">1050</span>
                </div>
                <div className="stat-row">
                  <span>יסודי:</span>
                  <span className="stat-value">593</span>
                </div>
                <div className="stat-row">
                  <span>על יסודי:</span>
                  <span className="stat-value">303</span>
                </div>
                <div className="stat-row">
                  <span>סך הכל: </span>
                  <span className="stat-value">1946</span>
                </div>
              </div>
            </div>
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
        <div className="special-ed-data">
          <div className="stats-section">
            <h3>גיל הרך</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span>מס׳ בעליות:</span>
                <span className="number">167</span>
              </div>
              <div className="stat-item">
                <span>מס׳ גנים:</span>
                <span className="number">16</span>
              </div>
              <div className="stat-item">
                <span>מס׳ תלמידים:</span>
                <span className="number">1523</span>
              </div>
            </div>
          </div>
          <div className="stats-section">
            <h3>כוללני</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span>מס׳ מסגרות:</span>
                <span className="number">35</span>
              </div>
              <div className="stat-item">
                <span>מס׳ כיתות:</span>
                <span className="number">316</span>
              </div>
              <div className="stat-item">
                <span>מס׳ תלמידים:</span>
                <span className="number">2268</span>
              </div>
            </div>
          </div>{" "}
          <div className="stats-section">
            <h3>יסודי - מקדמות</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span>מס׳ מסגרות:</span>
                <span className="number">33</span>
              </div>
              <div className="stat-item">
                <span>מס׳ כיתות:</span>
                <span className="number">125</span>
              </div>
              <div className="stat-item">
                <span>מס׳ תלמידים:</span>
                <span className="number">1055</span>
              </div>
            </div>
          </div>{" "}
          <div className="stats-section">
            <h3>על יסודי - מקדמות</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span>מס׳ מסגרות:</span>
                <span className="number">11</span>
              </div>
              <div className="stat-item">
                <span>מס׳ כיתות:</span>
                <span className="number">52</span>
              </div>
              <div className="stat-item">
                <span>מס׳ תלמידים:</span>
                <span className="number">479</span>
              </div>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stats-card">
              <h3>סך הכל תלמידים בתקצוב אישי במסגרות החינוך הרגיל</h3>
              <div className="stats-content">
                <div className="stat-row">
                  <span>פטור: </span>
                  <span className="stat-value">269</span>
                </div>
                <div className="stat-row">
                  <span>תרבותי יחודי: </span>
                  <span className="stat-value">51</span>
                </div>
                <div className="stat-row">
                  <span>מוכש"ר: </span>
                  <span className="stat-value">1960</span>
                </div>
                <div className="stat-row">
                  <span>סך הכל: </span>
                  <span className="stat-value">2280</span>
                </div>
              </div>
            </div>
          </div>
          <div className="framework-distribution">
            <h3>מסגרות חינוך מיוחד בהשוואה לכל המסגרות</h3>
            <div className="distribution-grid">
              <div className="distribution-item">
                <span className="percentage"> 21% </span>
                <span>גני חינוך מיוחד ביחס לכל המגזר החרדי</span>
              </div>
              <div className="distribution-item">
                <span className="percentage"> 24% </span>
                <span>גני שפה ביחס לכל המגזר החרדי</span>
              </div>
              <div className="distribution-item">
                <span className="percentage"> 24% </span>
                <span>בתי ספר כוללנים ביחס לכל המגזר החרדי</span>
              </div>
              <div className="distribution-item">
                <span className="percentage"> 20% </span>
                <span>כיתות מקדמות ביחס לכל המגזר החרדי</span>
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
            <div className="stats-card gradient-purple">
              <h3>סה״כ כיתות מקדמות</h3>
              <div className="total-stat animate-scale">71</div>
              <p className="stat-note">
                מתוכן 20 מוסדות מפעילים כיתות מקדמות שנה אחת - 28%
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "מקדמות בנות",
      content: () => (
        <div className="girls-programs">
          <div className="data-table-container girls-table-container">
            <h2 className="table-title girls-table-title">
              נתוני מקדמות בנות - תשפ״ה
            </h2>
          </div>
          <div className="summary-box">
            <div className="stats-summary">
              <div className="stat-item">
                <h4>בסיס</h4>
                <div className="stat-details">
                  <div className="stat-row">
                    <span>מוסדות:</span>
                    <span>13</span>
                  </div>

                  <div className="stat-row">
                    <span>כיתות:</span>
                    <span>43</span>
                  </div>
                  <div className="stat-row">
                    <span>תלמידות:</span>
                    <span>383</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="additional-info">
            <div className="info-box">
              <h4>תלמידות מסיימות כיתה ח' - תשפ״ה</h4>
              <div className="stat-row">
                <span>כיתות:</span>
                <span>5</span>
              </div>{" "}
              <div className="stat-row">
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
          <div className="stats-card gradient-green">
            <h3>גני חינוך מיוחד</h3>
            <div className="percentage-display animate-scale">15%</div>
            <p>גני חינוך מיוחד בהשוואה לגנים בירושלים</p>
            <div className="total-students">סה״כ גנים: 167</div>
          </div>

          <div className="stats-card gradient-orange">
            <h3> בנים - מסיימי גנים בתשפ'ה - עולים לכיתה א</h3>
            <div className="performance-stats animate-slide-up">
              <div className="performance-row">
                <span>שכיחות גבוהה:</span>
                <span className="performance-value">293 (72%)</span>
              </div>
              <div className="performance-row">
                <span>שכיחות נמוכה (כולל אוטיזם):</span>
                <span className="performance-value">116 (28%)</span>
              </div>
              <div className="performance-row">
                <span>אוטיזם</span>
                <span className="performance-value">78 (67%)</span>
              </div>
              <div className="success-rate">
                <span>סה״כ:</span>
                <span className="performance-value">409</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: () => (
        <div className="final-slide">
          <div className="final-message">
            <h2>יש לנו חינוך מיוחד עבורך</h2>
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
