import React from "react";

const getSVG = (name: any, styles: any) => {
  switch (name) {
    case "vectore":
      return (
        <>
          <svg
            width="30"
            height="32"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_517_28507)">
              <path
                d="M25 12.0108V16.6037C25 22.2976 21.0809 24.637 16.2946 21.7815L12.4422 19.4764L8.58974 17.1714C3.80342 14.3159 3.80342 9.65416 8.58974 6.79864L12.4422 4.49359L16.2946 2.18853C21.0809 -0.61538 25 1.70688 25 7.41791V12.0108Z"
                fill="#FFB910"
              />
              <path
                d="M25 12.0108V16.6037C25 22.2976 21.0809 24.637 16.2946 21.7815L12.4422 19.4764L8.58974 17.1714C3.80342 14.3159 3.80342 9.65416 8.58974 6.79864L12.4422 4.49359L16.2946 2.18853C21.0809 -0.61538 25 1.70688 25 7.41791V12.0108Z"
                stroke="#FFF8E8"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_517_28507"
                x="0"
                y="-0.000488281"
                width="30"
                height="32.0015"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_517_28507"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_517_28507"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      );

    case "sendDeactive":
      return (
        <>
          <svg
            width="70"
            height="46"
            viewBox="0 0 70 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.6177 34.0286L23.686 28.6184C18.7803 26.1906 18.7736 22.1911 23.6496 19.7136L34.5367 14.2143C41.8557 10.5126 44.8748 13.5071 41.233 20.8561L39.6271 24.1008L41.2594 27.3323C44.9612 34.6513 41.9762 37.6608 34.6177 34.0286Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M39.0316 24.3347L32.1217 24.3725"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="1"
              y="1.5"
              width="68"
              height="43"
              rx="11"
              stroke="#FFF8E8"
              stroke-width="2"
            />
          </svg>
        </>
      );

    case "logo":
      return (
        <>
          <svg
            width="76"
            height="96"
            viewBox="0 0 76 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.0875 1.21221C45.6247 0.514095 41.817 0.165039 37.6645 0.165039C12.7241 0.165039 0.253906 12.8186 0.253906 38.1257V57.9472C0.253906 83.3157 12.7241 96 37.6645 96C62.6663 95.9386 75.1672 83.2543 75.1672 57.9472V38.1257C75.1672 33.6441 74.7751 29.5594 73.9911 25.8714H49.0878C49.0878 25.8848 49.0852 30.032 49.0878 38.1262V57.9456C49.0878 66.1151 45.2817 70.2015 37.6645 70.2015C30.1086 70.2015 26.3307 66.1167 26.3307 57.9472V38.1257C26.3307 29.9561 30.0779 25.8714 37.5723 25.8714H49.0875V1.21221Z"
              fill="#FFF8E8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.154 48.0749C44.154 51.6306 41.2715 54.5131 37.7158 54.5131C34.1601 54.5131 31.2776 51.6306 31.2776 48.0749C31.2776 44.5192 34.1601 41.6367 37.7158 41.6367C41.2715 41.6367 44.154 44.5192 44.154 48.0749ZM41.4616 46.5923C41.4616 47.6185 40.6257 48.4505 39.5946 48.4505C38.5635 48.4505 37.7276 47.6185 37.7276 46.5923C37.7276 45.566 38.5635 44.734 39.5946 44.734C40.6257 44.734 41.4616 45.566 41.4616 46.5923ZM41.3408 44.5414C41.6797 44.5414 41.9544 44.2667 41.9544 43.9278C41.9544 43.5889 41.6797 43.3142 41.3408 43.3142C41.0019 43.3142 40.7272 43.5889 40.7272 43.9278C40.7272 44.2667 41.0019 44.5414 41.3408 44.5414Z"
              fill="#FFF8E8"
            />
          </svg>
        </>
      );
    case "infoCircel":
      return (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8V13"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9941 16H12.0031"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ;
        </>
      );
    case "group4":
      return (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8V13"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9941 16H12.0031"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      );
    case "group3":
      return (
        <>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1323 3.2627L15.0119 22.8828"
              stroke="#FFB910"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M3.26221 15.0122L22.8823 11.1326"
              stroke="#FFB910"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </>
      );

    case "chack":
      return (
        <>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="23" stroke="#FFB910" stroke-width="3" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.1368 18.0408C35.3543 19.3553 35.2742 21.4065 33.9577 22.6223L24.737 31.1381C23.4567 32.3204 21.4698 32.2817 20.2367 31.0504L15.951 26.7709C14.683 25.5048 14.683 23.452 15.9509 22.1859C17.2189 20.9197 19.2746 20.9197 20.5425 22.1858L22.6203 24.2606L29.5487 17.8619C30.8651 16.6462 32.9193 16.7262 34.1368 18.0408Z"
              fill="#FFB910"
            />
          </svg>
        </>
      );

    case "arrow":
      return (
        <>
          <svg
            width="135"
            height="67"
            viewBox="0 0 135 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M133.576 65.8779C133.714 66.1175 134.019 66.2004 134.259 66.0631C134.498 65.9258 134.581 65.6203 134.444 65.3807L133.576 65.8779ZM64.392 30.5892L64.6005 31.0436L64.392 30.5892ZM2.51507 0.333605C2.25473 0.241552 1.96904 0.377976 1.877 0.638329L0.37688 4.88093C0.284822 5.14127 0.421259 5.42695 0.681604 5.51901C0.941949 5.61106 1.22762 5.47463 1.31968 5.21428L2.65311 1.44308L6.42432 2.77651C6.68466 2.86857 6.97034 2.73214 7.0624 2.47179C7.15445 2.21145 7.01802 1.92576 6.75767 1.83371L2.51507 0.333605ZM134.01 65.6293C134.444 65.3807 134.444 65.3804 134.443 65.3798C134.443 65.3794 134.443 65.3786 134.442 65.3777C134.441 65.3759 134.44 65.3733 134.438 65.3699C134.434 65.3631 134.428 65.3531 134.42 65.3399C134.405 65.3137 134.383 65.275 134.353 65.2242C134.293 65.1227 134.204 64.9732 134.087 64.7794C133.853 64.3918 133.505 63.827 133.048 63.1155C132.136 61.6925 130.789 59.6818 129.05 57.3262C125.575 52.6168 120.526 46.5199 114.24 40.9842C101.682 29.9237 84.0638 21.0119 64.1834 30.1347L64.6005 31.0436C83.9441 22.167 101.135 30.7753 113.58 41.7347C119.795 47.209 124.797 53.247 128.246 57.92C129.97 60.2557 131.304 62.2481 132.207 63.6554C132.658 64.359 133.001 64.9162 133.231 65.2967C133.346 65.487 133.433 65.6331 133.491 65.7312C133.52 65.7803 133.541 65.8174 133.555 65.842C133.563 65.8543 133.568 65.8635 133.571 65.8695C133.573 65.8725 133.574 65.8747 133.575 65.8761C133.576 65.8768 133.576 65.8773 133.576 65.8776C133.576 65.8779 133.576 65.8779 134.01 65.6293ZM64.1834 30.1347C54.4786 34.5881 45.8149 34.9639 38.2734 33.0443C30.7216 31.1221 24.2628 26.8895 18.9985 22.0778C13.7348 17.2666 9.68263 11.8921 6.94498 7.71582C5.57687 5.62877 4.53879 3.84367 3.84345 2.58175C3.49581 1.95085 3.23395 1.45091 3.05941 1.1096C2.97216 0.93896 2.90674 0.807984 2.86337 0.720147C2.84169 0.676232 2.82551 0.643102 2.81487 0.621188C2.80955 0.61023 2.80561 0.602074 2.80306 0.596781C2.80179 0.594138 2.80086 0.592203 2.80028 0.590994C2.79998 0.590386 2.79982 0.590027 2.79967 0.589718C2.79959 0.589538 2.79959 0.589536 2.34839 0.805004C1.89719 1.02047 1.89737 1.02084 1.89763 1.02138C1.89783 1.0218 1.89819 1.02253 1.89859 1.02338C1.8994 1.02507 1.90056 1.02748 1.90206 1.03061C1.90509 1.03688 1.9095 1.04601 1.91529 1.05795C1.92688 1.08183 1.94404 1.11697 1.96673 1.16291C2.0121 1.25479 2.07961 1.38994 2.16907 1.56488C2.34796 1.91474 2.61466 2.42382 2.96761 3.06435C3.67343 4.34528 4.72458 6.15265 6.10865 8.26406C8.87544 12.4848 12.9796 17.9311 18.3238 22.8159C23.6674 27.7001 30.268 32.0385 38.0267 34.0134C45.7956 35.9909 54.6933 35.5899 64.6005 31.0436L64.1834 30.1347Z"
              fill="#FFF8E8"
            />
          </svg>
        </>
      );

    default:
      return <></>;
  }
};

export default function SvgComponent({
  name = " ",
  style = {},
  fill = "#000000",
  viewBox = " ",
  width = " ",
  className = " ",
  id = " ",
  stroke = " ",
}) {
  return (
    <>
      <svg
        width={width}
        style={style}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        xmlnsXlink="http://www.w3.org/2000/svg"
        id={id}
      >
        {getSVG(name, { fill, stroke })}
      </svg>
    </>
  );
}
