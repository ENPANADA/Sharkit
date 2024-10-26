import { COLORS } from "@config/global";
import { IconSharKit } from "@lib/Icons";
import type { PropTSX } from "@type/svg";

const pinInput = () => (
  <svg viewBox="0 0 240 155">
    <path
      d="M31 62C31 59.2386 33.2386 57 36 57H66C68.7614 57 71 59.2386 71 62V92C71 94.7614 68.7614 97 66 97H36C33.2386 97 31 94.7614 31 92V62Z"
      fill={COLORS.bgDark}
    ></path>
    <path
      d="M31 57H71H31ZM71 92C71 95.866 67.866 99 64 99H38C34.134 99 31 95.866 31 92C31 93.6569 33.2386 95 36 95H66C68.7614 95 71 93.6569 71 92ZM31 97V57V97ZM71 57V97V57Z"
      fill={COLORS.accent}
    ></path>
    <path
      d="M51.5 86.2386C50.2159 86.2386 49.1222 85.8892 48.2188 85.1903C47.3153 84.4858 46.625 83.4659 46.1477 82.1307C45.6705 80.7898 45.4318 79.1705 45.4318 77.2727C45.4318 75.3864 45.6705 73.7756 46.1477 72.4403C46.6307 71.0994 47.3239 70.0767 48.2273 69.3722C49.1364 68.6619 50.2273 68.3068 51.5 68.3068C52.7727 68.3068 53.8608 68.6619 54.7642 69.3722C55.6733 70.0767 56.3665 71.0994 56.8438 72.4403C57.3267 73.7756 57.5682 75.3864 57.5682 77.2727C57.5682 79.1705 57.3295 80.7898 56.8523 82.1307C56.375 83.4659 55.6847 84.4858 54.7812 85.1903C53.8778 85.8892 52.7841 86.2386 51.5 86.2386ZM51.5 84.3636C52.7727 84.3636 53.7614 83.75 54.4659 82.5227C55.1705 81.2955 55.5227 79.5455 55.5227 77.2727C55.5227 75.7614 55.3608 74.4744 55.0369 73.4119C54.7188 72.3494 54.2585 71.5398 53.6562 70.983C53.0597 70.4261 52.3409 70.1477 51.5 70.1477C50.2386 70.1477 49.2528 70.7699 48.5426 72.0142C47.8324 73.2528 47.4773 75.0057 47.4773 77.2727C47.4773 78.7841 47.6364 80.0682 47.9545 81.125C48.2727 82.1818 48.7301 82.9858 49.3267 83.5369C49.929 84.0881 50.6534 84.3636 51.5 84.3636Z"
      fill={COLORS.fontColor}
    ></path>
    <path
      d="M77 62C77 59.2386 79.2386 57 82 57H112C114.761 57 117 59.2386 117 62V92C117 94.7614 114.761 97 112 97H82C79.2386 97 77 94.7614 77 92V62Z"
      fill={COLORS.bgDark}
    ></path>
    <path
      d="M77 57H117H77ZM117 92C117 95.866 113.866 99 110 99H84C80.134 99 77 95.866 77 92C77 93.6569 79.2386 95 82 95H112C114.761 95 117 93.6569 117 92ZM77 97V57V97ZM117 57V97V57Z"
      fill={COLORS.accent}
    ></path>
    <path
      d="M91.8068 86V84.4659L97.5682 78.1591C98.2443 77.4205 98.8011 76.7784 99.2386 76.233C99.6761 75.6818 100 75.1648 100.21 74.6818C100.426 74.1932 100.534 73.6818 100.534 73.1477C100.534 72.5341 100.386 72.0028 100.091 71.554C99.8011 71.1051 99.4034 70.7585 98.8977 70.5142C98.392 70.2699 97.8239 70.1477 97.1932 70.1477C96.5227 70.1477 95.9375 70.2869 95.4375 70.5653C94.9432 70.8381 94.5597 71.2216 94.2869 71.7159C94.0199 72.2102 93.8864 72.7898 93.8864 73.4545H91.875C91.875 72.4318 92.1108 71.5341 92.5824 70.7614C93.054 69.9886 93.696 69.3864 94.5085 68.9545C95.3267 68.5227 96.2443 68.3068 97.2614 68.3068C98.2841 68.3068 99.1903 68.5227 99.9801 68.9545C100.77 69.3864 101.389 69.9687 101.838 70.7017C102.287 71.4347 102.511 72.25 102.511 73.1477C102.511 73.7898 102.395 74.4176 102.162 75.0312C101.935 75.6392 101.537 76.3182 100.969 77.0682C100.406 77.8125 99.625 78.7216 98.625 79.7955L94.7045 83.9886V84.125H102.818V86H91.8068Z"
      fill={COLORS.fontColor}
    ></path>
    <path
      d="M169 62C169 59.2386 171.239 57 174 57H204C206.761 57 209 59.2386 209 62V92C209 94.7614 206.761 97 204 97H174C171.239 97 169 94.7614 169 92V62Z"
      fill={COLORS.bgDark}
    ></path>
    <path
      d="M169 57H209H169ZM209 92C209 95.866 205.866 99 202 99H176C172.134 99 169 95.866 169 92C169 93.6569 171.239 95 174 95H204C206.761 95 209 93.6569 209 92ZM169 97V57V97ZM209 57V97V57Z"
      fill={COLORS.accent}
    ></path>
    <path
      d="M194.875 86V87.875H183.966V86H194.875Z"
      fill={COLORS.fontColor}
    ></path>
    <path
      d="M123 62C123 59.2386 125.239 57 128 57H158C160.761 57 163 59.2386 163 62V92C163 94.7614 160.761 97 158 97H128C125.239 97 123 94.7614 123 92V62Z"
      fill={COLORS.bgDark}
    ></path>
    <path
      d="M123 57H163H123ZM163 92C163 95.866 159.866 99 156 99H130C126.134 99 123 95.866 123 92C123 93.6569 125.239 95 128 95H158C160.761 95 163 93.6569 163 92ZM123 97V57V97ZM163 57V97V57Z"
      fill={COLORS.accentLight}
    ></path>
    <line
      x1="143.458"
      y1="67"
      x2="143.458"
      y2="88"
      stroke={COLORS.fontColor}
      strokeWidth="0.916515"
    ></line>
  </svg>
);

const optForm = () => (
  <svg viewBox="0 0 240 240">
    <rect x="31" y="28" width="179" height="184" rx="16" fill={COLORS.bgDark} />
    <rect
      x="44"
      y="45"
      width="10.5"
      height="10"
      rx="5"
      fill={COLORS.accentSecondary}
    />
    <rect
      x="75.5"
      y="45"
      width="10.5"
      height="10"
      rx="5"
      fill={COLORS.accentSecondary}
    />
    <rect
      x="59.75"
      y="45"
      width="10.5"
      height="10"
      rx="5"
      fill={COLORS.accentSecondary}
    />
    <rect x="71" y="125" width="20" height="3" fill={COLORS.accentLight} />
    <rect x="149" y="125" width="20" height="3" fill={COLORS.accentLight} />
    <rect x="123" y="125" width="20" height="3" fill={COLORS.accentLight} />
    <rect x="97" y="125" width="20" height="3" fill={COLORS.accentLight} />
    <rect
      x="44"
      y="71"
      width="153"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect x="44" y="93" width="88" height="6" rx="3" fill={COLORS.accentDark} />
    <rect
      x="44"
      y="82"
      width="153"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="44"
      y="150"
      width="153"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="44"
      y="161"
      width="56"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="149"
      y="181"
      width="46"
      height="17"
      rx="8.5"
      fill={COLORS.accent}
    />
  </svg>
);

const requestForm = () => (
  <svg viewBox="0 0 240 240">
    <rect x="31" y="28" width="179" height="184" rx="16" fill={COLORS.bgDark} />
    <rect
      x="44"
      y="45"
      width="10.5"
      height="10"
      rx="5"
      fill={COLORS.accentSecondary}
    />
    <rect
      x="75.5"
      y="45"
      width="10.5"
      height="10"
      rx="5"
      fill={COLORS.accentSecondary}
    />
    <rect
      x="59.75"
      y="45"
      width="10.5"
      height="10"
      rx="5"
      fill={COLORS.accentSecondary}
    />
    <rect x="79" y="178" width="82" height="17" rx="8.5" fill={COLORS.accent} />
    <path
      d="M52 70H80C81.6569 70 83 71.3431 83 73V73C83 74.6569 81.6569 76 80 76H52V70Z"
      fill={COLORS.accentDark}
    />
    <path
      d="M44 73C44 71.3431 45.3431 70 47 70H51.95V76H47C45.3431 76 44 74.6569 44 73V73Z"
      fill={COLORS.accent}
    />
    <path
      d="M95 70H137C138.657 70 140 71.3431 140 73V73C140 74.6569 138.657 76 137 76H95V70Z"
      fill={COLORS.accentDark}
    />
    <path
      d="M87 73C87 71.3431 88.3431 70 90 70H94.95V76H90C88.3431 76 87 74.6569 87 73V73Z"
      fill={COLORS.accent}
    />
    <path
      d="M152 70H194C195.657 70 197 71.3431 197 73V73C197 74.6569 195.657 76 194 76H152V70Z"
      fill={COLORS.accentDark}
    />
    <path
      d="M144 73C144 71.3431 145.343 70 147 70H151.95V76H147C145.343 76 144 74.6569 144 73V73Z"
      fill={COLORS.accent}
    />
    <path
      d="M51.7652 102H116C117.657 102 119 103.343 119 105V105C119 106.657 117.657 108 116 108H51.7652V102Z"
      fill={COLORS.accentDark}
    />
    <path
      d="M44 105C44 103.343 45.3431 102 47 102H51.9545V108H47C45.3431 108 44 106.657 44 105V105Z"
      fill={COLORS.accent}
    />
    <path
      d="M51.7652 91H116C117.657 91 119 92.3431 119 94V94C119 95.6569 117.657 97 116 97H51.7652V91Z"
      fill={COLORS.accentDark}
    />
    <path
      d="M44 94C44 92.3431 45.3431 91 47 91H51.9545V97H47C45.3431 97 44 95.6569 44 94V94Z"
      fill={COLORS.accent}
    />
    <path
      d="M129.765 102H194C195.657 102 197 103.343 197 105V105C197 106.657 195.657 108 194 108H129.765V102Z"
      fill={COLORS.accentDark}
    />
    <path
      d="M122 105C122 103.343 123.343 102 125 102H129.955V108H125C123.343 108 122 106.657 122 105V105Z"
      fill={COLORS.accent}
    />
    <path
      d="M129.765 91H194C195.657 91 197 92.3431 197 94V94C197 95.6569 195.657 97 194 97H129.765V91Z"
      fill={COLORS.accentDark}
    />
    <path
      d="M122 94C122 92.3431 123.343 91 125 91H129.955V97H125C123.343 97 122 95.6569 122 94V94Z"
      fill={COLORS.accent}
    />
    <rect
      x="44"
      y="113"
      width="153"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="44"
      y="124"
      width="153"
      height="45"
      rx="5"
      fill={COLORS.accentDark}
    />
    <line
      x1="44"
      y1="83"
      x2="196"
      y2="83"
      stroke={COLORS.accentLight}
      strokeWidth="2"
    />
  </svg>
);

const optMail = () => (
  <svg viewBox="0 0 240 240">
    <rect x="31" y="28" width="179" height="184" rx="16" fill={COLORS.bgDark} />
    <path
      d="M31 44C31 35.1634 38.1634 28 47 28H194C202.837 28 210 35.1634 210 44V44H31V44Z"
      fill={COLORS.accentSecondary}
    />
    <rect x="99" y="87" width="42" height="11" rx="5.5" fill={COLORS.accent} />
    <rect
      x="44"
      y="53"
      width="153"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect x="44" y="75" width="88" height="6" rx="3" fill={COLORS.accentDark} />
    <rect
      x="44"
      y="64"
      width="153"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="44"
      y="105"
      width="153"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="44"
      y="116"
      width="56"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="44"
      y="127"
      width="153"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="44"
      y="138"
      width="29"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect
      x="100"
      y="177"
      width="40"
      height="6"
      rx="3"
      fill={COLORS.accentDark}
    />
    <rect x="86" y="147" width="68" height="25" fill={COLORS.accent} />
    <line
      x1="44"
      y1="189.986"
      x2="197"
      y2="189.986"
      stroke={COLORS.accentLight}
      strokeWidth="2"
    />
  </svg>
);

const covers: PropTSX = {
  pinInput,
  optForm,
  requestForm,
  optMail,
};

export const getGalleryCoverByName = ({ id }: { id: string }) =>
  covers[id]?.() || (
    <IconSharKit
      stroke={COLORS.accentLight}
      strokeWidth="5"
      data-default-cover
    />
  );
