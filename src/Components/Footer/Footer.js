import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="a-content-f">
        <div className="info">
          <p className="info-logo">da_cakes_store</p>
          <p className="info-inst">
            Inst:{" "}
            <a
              class="href-s"
              href="https://www.instagram.com/da_cakes_store?igsh=cGs4Nzg0ZTFmamYw"
              target="_blank"
              rel="noopener noreferrer"
            >
              da_cakes_store
            </a>
          </p>
          <p className="info-tg">
            Telegram:{" "}
            <a
              class="href-s"
              href="https://t.me/militr_am"
              target="_blank"
              rel="noopener noreferrer"
            >
              +7 (985) 200-37-21
            </a>
          </p>
          <p className="info-tg">
            What`s App:{" "}
            <a
              class="href-s"
              href="https://wa.me/+79852003721"
              target="_blank"
              rel="noopener noreferrer"
            >
              +7 (985) 200-37-21
            </a>
          </p>
        </div>
        <div className="info-me">
          <p className="info-tg info--me">
            website from:{" "}
            <a
              class="href-s"
              href="https://t.me/maksim_medvedew"
              target="_blank"
              rel="noopener noreferrer"
            >
              @maksim_medvedew
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
