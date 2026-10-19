
import { useState } from "react";
import "./App.css";

const caregivers = [
  {
    id: 1,
    name: "مریم احمدی",
    city: "تهران",
    experience: "۵ سال تجربه",
    price: "ساعتی ۱۵۰ هزار تومان",
    initials: "م",
    color: "pink",
    skills: ["همراهی روزانه", "کمک در امور منزل"],
  },
  {
    id: 2,
    name: "زهرا رضایی",
    city: "تهران",
    experience: "۳ سال تجربه",
    price: "ساعتی ۱۳۰ هزار تومان",
    initials: "ز",
    color: "green",
    skills: ["هم‌صحبتی", "همراهی در پیاده‌روی"],
  },
  {
    id: 3,
    name: "فاطمه کریمی",
    city: "کرج",
    experience: "۴ سال تجربه",
    price: "ساعتی ۱۴۰ هزار تومان",
    initials: "ف",
    color: "purple",
    skills: ["مراقبت روزانه", "همراهی"],
  },
];

function App() {
  const [city, setCity] = useState("همه شهرها");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    familyName: "",
    phone: "",
    service: "همراهی روزانه",
    details: "",
  });

  const filtered = caregivers.filter((caregiver) => {
    const matchesCity =
      city === "همه شهرها" || caregiver.city === city;
    const matchesSearch =
      caregiver.name.includes(search.trim()) ||
      caregiver.skills.some((skill) => skill.includes(search.trim()));

    return matchesCity && matchesSearch;
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (!selected) {
      setMessage("لطفاً ابتدا یک مراقب را انتخاب کنید.");
      return;
    }

    setMessage(
      "فرم آزمایشی تکمیل شد. هنوز اطلاعاتی ارسال نشده است. برای ثبت واقعی درخواست، به اتصال سرور نیاز داریم."
    );
  }

  return (
    <div className="app" dir="rtl">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">هم</span>
          <span>هم‌مراقب</span>
        </a>

        <nav>
          <a href="#home">خانه</a>
          <a href="#caregivers">مراقبان</a>
          <a href="#about">درباره ما</a>
        </nav>

        <a className="nav-button" href="#request">
          درخواست مراقب
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              همراه خانواده‌های ایرانی
            </span>

            <h1>
              مراقبت از عزیزانتان،
              <br />
              با <span>آرامش خاطر</span>
            </h1>

            <p>
              مراقبان قابل‌اعتماد را برای همراهی و مراقبت روزانه
              از سالمندان پیدا کنید؛ با احترام، توجه و مهربانی.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#caregivers">
                مشاهده مراقبان
              </a>
              <a className="secondary-button" href="#about">
                آشنایی با هم‌مراقب
              </a>
            </div>

            <div className="trust-note">
              <span>♡</span>
              احترام به سالمندان، آرامش خانواده‌ها
            </div>
          </div>

          <div className="hero-visual">
            <div className="sun-shape" />
            <div className="hero-card">
              <div className="illustration">🌷</div>
              <div className="hero-card-text">
                <span>مراقبت با مهر</span>
                <strong>هر روز، یک همراه خوب</strong>
              </div>
              <div className="heart">♡</div>
            </div>
            <div className="floating-note">
              <span className="note-icon">✓</span>
              <div>
                <strong>انتخاب آگاهانه</strong>
                <small>مشخصات و تجربه مراقب را بررسی کنید</small>
              </div>
            </div>
          </div>
        </section>

        <section className="values" id="about">
          <div className="value-item">
            <span className="value-icon">♡</span>
            <div>
              <strong>مراقبت انسانی</strong>
              <p>با احترام و توجه به نیازهای هر سالمند</p>
            </div>
          </div>

          <div className="value-item">
            <span className="value-icon">⌕</span>
            <div>
              <strong>جست‌وجوی آسان</strong>
              <p>بررسی گزینه‌ها بر اساس شهر و خدمات</p>
            </div>
          </div>

          <div className="value-item">
            <span className="value-icon">✓</span>
            <div>
              <strong>شفافیت در انتخاب</strong>
              <p>اطلاعات روشن برای تصمیم‌گیری بهتر</p>
            </div>
          </div>
        </section>

        <section className="caregivers-section" id="caregivers">
          <div className="section-heading">
            <div>
              <span className="eyebrow">انتخاب همراه مناسب</span>
              <h2>مراقبان روزانه</h2>
              <p>گزینه‌های مناسب خانواده خود را بررسی کنید.</p>
            </div>
            <span className="result-count">
              {filtered.length} نتیجه
            </span>
          </div>

          <div className="search-panel">
            <label>
              جست‌وجو
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="نام مراقب یا نوع خدمات..."
              />
            </label>

            <label>
              شهر
              <select
                value={city}
                onChange={(event) => setCity(event.target.value)}
              >
                <option>همه شهرها</option>
                <option>تهران</option>
                <option>کرج</option>
              </select>
            </label>
          </div>

          <div className="caregiver-grid">
            {filtered.map((caregiver) => (
              <article className="caregiver-card" key={caregiver.id}>
                <div className={`avatar ${caregiver.color}`}>
                  {caregiver.initials}
                </div>

                <div className="caregiver-name">
                  <h3>{caregiver.name}</h3>
                  <span className="location">⌖ {caregiver.city}</span>
                </div>

                <span className="experience">
                  {caregiver.experience}
                </span>

                <div className="skill-list">
                  {caregiver.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="card-bottom">
                  <strong>{caregiver.price}</strong>
                  <button
                    onClick={() => {
                      setSelected(caregiver);
                      setMessage("");
                    }}
                  >
                    انتخاب مراقب
                  </button>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <p className="empty-state">
                موردی پیدا نشد. عبارت جست‌وجو یا شهر را تغییر دهید.
              </p>
            )}
          </div>

          <p className="demo-notice">
            توجه: نام‌ها، قیمت‌ها و سوابق این بخش نمونه و غیرواقعی‌اند.
            هیچ‌یک از مراقبان هنوز تأیید هویت نشده‌اند.
          </p>
        </section>

        <section className="request-section" id="request">
          <div className="request-intro">
            <span className="eyebrow">قدم اول برای دریافت خدمات</span>
            <h2>درخواست مراقب ثبت کنید</h2>
            <p>
              مراقب موردنظرتان را انتخاب کنید و اطلاعات آزمایشی
              درخواست را وارد کنید. در این نسخه، اطلاعات جایی ارسال
              یا ذخیره نمی‌شوند.
            </p>
            {selected && (
              <div className="selected-caregiver">
                <span>مراقب انتخاب‌شده</span>
                <strong>{selected.name}</strong>
                <button
                  className="text-button"
                  onClick={() => setSelected(null)}
                >
                  تغییر انتخاب
                </button>
              </div>
            )}
          </div>

          <form className="request-form" onSubmit={handleSubmit}>
            <label>
              نام درخواست‌دهنده
              <input
                required
                value={form.familyName}
                onChange={(event) =>
                  setForm({ ...form, familyName: event.target.value })
                }
                placeholder="نام شما"
              />
            </label>

            <label>
              شماره تماس
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  setForm({ ...form, phone: event.target.value })
                }
                placeholder="شماره تماس"
              />
            </label>

            <label>
              نوع خدمات
              <select
                value={form.service}
                onChange={(event) =>
                  setForm({ ...form, service: event.target.value })
                }
              >
                <option>همراهی روزانه</option>
                <option>هم‌صحبتی و پیاده‌روی</option>
                <option>کمک در امور روزمره</option>
              </select>
            </label>

            <label>
              توضیحات (اختیاری)
              <textarea
                rows="3"
                value={form.details}
                onChange={(event) =>
                  setForm({ ...form, details: event.target.value })
                }
                placeholder="نیازهای کلی خود را بنویسید..."
              />
            </label>

            <button className="submit-button" type="submit">
              بررسی درخواست آزمایشی
            </button>

            {message && (
              <p className="form-message" role="status">
                {message}
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-icon">هم</span>
          <span>هم‌مراقب</span>
        </a>
        <p>با مهر، برای روزهای بهتر.</p>
        <small>نسخه اولیه آزمایشی · هنوز آماده ارائه خدمات واقعی نیست</small>
      </footer>
    </div>
  );
}

export default App;
