import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="techwave_fn_footer dark:bg-black_background">
        <div className="techwave_fn_footer_content">
          <div className="copyright">
            <p>2024© MHT AI Team</p>
          </div>
          <div className="menu_items">
            <ul>
              {/* <li><Link href="/terms">Terms of Service</Link></li> */}
              {/* <li><Link href="/privacy">Privacy Policy</Link></li> */}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
