"use client";
import React, { useState } from "react";
import Link from "next/link";
import VideoElement from "./VideoElement";
import LabelHover from "./LabelHover";

export default function VideoGeneration() {
  return (
    <>
      <div className="techwave_fn_image_generation_page">
        <div className="generation__page">
          {/* !Generation Header */}
          <div className="generation_history">
            {/* <div className="fn__generation_item">
              <div className="item_header">
                <div className="title_holder">
                  <h2 className="prompt_title">
                    Frozen Glacial Mystical spiral Lighthouse, a minimalist
                    lighthouse landscape with a mystical , Watercolor Clipart,
                    comic, strybk, full Illustration, 4k, sharp focus,
                    watercolor, smooth soft skin, symmetrical, soft lighting,
                    detailed face, concept art, muted colors
                  </h2>
                  <p className="negative_prompt_title">
                    Negative prompt: Text, watermarks, off centre, blur, low
                    res, out of frame, cut off, ugly
                  </p>
                </div>
                <div className="item_options">
                  <div className="fn__icon_options medium_size align_right">
                    <Link href="#" className="fn__icon_button">
                      <img src="svg/info.svg" alt="" className="fn__svg" />
                    </Link>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <span className="text">ArtShaper v3</span>
                        </li>
                        <li>
                          <span className="text">512 x 512px</span>
                        </li>
                        <li>
                          <span className="text">March 15, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fn__icon_options medium_size align_right">
                    <Link href="#" className="fn__icon_button">
                      <span className="dots" />
                    </Link>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <Link href="#">Copy Prompt</Link>
                        </li>
                        <li>
                          <Link href="#">Reuse Prompt</Link>
                        </li>
                        <li>
                          <Link href="#">Upscale All</Link>
                        </li>
                        <li>
                          <Link href="#">Download All</Link>
                        </li>
                        <li className="high_priorety">
                          <Link href="#">Delete All</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item_list">
                <ul className="fn__generation_list">
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/1.jpg" alt="" />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <img
                                src="svg/download.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Original Image</Link>
                                </li>
                                <li>
                                  <Link href="#">Creative Upscaled Image</Link>
                                </li>
                                <li>
                                  <Link href="#">HD Upscaled Image</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <img
                                src="svg/upscale.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Creative Upscale</Link>
                                </li>
                                <li>
                                  <Link href="#">Alternative Upscale</Link>
                                </li>
                                <li>
                                  <Link href="#">HD Upscale</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <span className="dots" />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Make Variations</Link>
                                </li>
                                <li className="high_priorety">
                                  <Link href="#">Delete Image</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/2.jpg" alt="" />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <img
                                src="svg/download.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Original Image</Link>
                                </li>
                                <li>
                                  <Link href="#">Creative Upscaled Image</Link>
                                </li>
                                <li>
                                  <Link href="#">HD Upscaled Image</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <img
                                src="svg/upscale.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Creative Upscale</Link>
                                </li>
                                <li>
                                  <Link href="#">Alternative Upscale</Link>
                                </li>
                                <li>
                                  <Link href="#">HD Upscale</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <span className="dots" />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Make Variations</Link>
                                </li>
                                <li className="high_priorety">
                                  <Link href="#">Delete Image</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/3.jpg" alt="" />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <img
                                src="svg/download.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Original Image</Link>
                                </li>
                                <li>
                                  <Link href="#">Creative Upscaled Image</Link>
                                </li>
                                <li>
                                  <Link href="#">HD Upscaled Image</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <img
                                src="svg/upscale.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Creative Upscale</Link>
                                </li>
                                <li>
                                  <Link href="#">Alternative Upscale</Link>
                                </li>
                                <li>
                                  <Link href="#">HD Upscale</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <span className="dots" />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Make Variations</Link>
                                </li>
                                <li className="high_priorety">
                                  <Link href="#">Delete Image</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="fn__gl_item">
                    <div className="fn__gl__item">
                      <div className="abs_item">
                        <img src="img/gallery/4.jpg" alt="" />
                        <div className="all_options">
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <img
                                src="svg/download.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Original Image</Link>
                                </li>
                                <li>
                                  <Link href="#">Creative Upscaled Image</Link>
                                </li>
                                <li>
                                  <Link href="#">HD Upscaled Image</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <img
                                src="svg/upscale.svg"
                                alt=""
                                className="fn__svg"
                              />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Creative Upscale</Link>
                                </li>
                                <li>
                                  <Link href="#">Alternative Upscale</Link>
                                </li>
                                <li>
                                  <Link href="#">HD Upscale</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="fn__icon_options medium_size">
                            <Link href="#" className="fn__icon_button">
                              <span className="dots" />
                            </Link>
                            <div className="fn__icon_popup">
                              <ul>
                                <li>
                                  <Link href="#">Make Variations</Link>
                                </li>
                                <li className="high_priorety">
                                  <Link href="#">Delete Image</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="p-2 flex flex-wrap gap-2 justify-center">
              <VideoElement url={"https://www.w3schools.com/html/mov_bbb.mp4"} videoId={1}>
                <LabelHover />
              </VideoElement>
              <VideoElement url={"https://www.w3schools.com/html/mov_bbb.mp4"} videoId={2}>
                <LabelHover />
              </VideoElement>
              <VideoElement url={"https://www.w3schools.com/html/mov_bbb.mp4"} videoId={3}>
                <LabelHover />
              </VideoElement>
              <VideoElement url={"https://www.w3schools.com/html/mov_bbb.mp4"} videoId={4}>
                <LabelHover />
              </VideoElement>
              <VideoElement url={"https://www.w3schools.com/html/mov_bbb.mp4"} videoId={5}>
                <LabelHover />
              </VideoElement>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
