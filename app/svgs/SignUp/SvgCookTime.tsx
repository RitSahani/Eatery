import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99979 0C3.58165 0 0 3.58176 0 7.99973C0 12.4177 3.58165 15.9999 7.99973 15.9999C12.4178 15.9999 15.9997 12.4179 15.9997 7.99973C15.9997 3.5816 12.4179 0 7.99979 0ZM8.55221 8.97797C8.55179 8.99899 8.54864 9.02 8.54571 9.04107C8.54363 9.05685 8.54267 9.07301 8.53909 9.08853C8.53552 9.10469 8.52939 9.12064 8.52416 9.1368C8.51792 9.15632 8.51211 9.17579 8.50395 9.19419C8.5024 9.19739 8.50187 9.2008 8.50048 9.204C8.48843 9.22971 8.47445 9.25381 8.45915 9.27664C8.45819 9.27803 8.45691 9.27941 8.45595 9.2808C8.43851 9.3064 8.41861 9.32965 8.39771 9.35147C8.39189 9.35744 8.38597 9.36283 8.37984 9.36848C8.36144 9.38603 8.34208 9.40208 8.32149 9.41675C8.31515 9.42133 8.30907 9.42613 8.3024 9.43056C8.276 9.44784 8.24832 9.46304 8.21952 9.47552C8.21328 9.47829 8.20677 9.47995 8.20043 9.48245C8.17611 9.49184 8.15147 9.49963 8.12603 9.50555C8.11691 9.50773 8.10789 9.50971 8.09861 9.51136C8.06597 9.51733 8.03291 9.52144 7.99941 9.52144C7.99264 9.52144 7.98571 9.51936 7.97893 9.51909C7.94683 9.51787 7.91504 9.51536 7.88448 9.50885C7.87493 9.50677 7.86555 9.50261 7.856 9.5C7.82752 9.49227 7.79968 9.48368 7.77312 9.47179C7.77008 9.47024 7.76688 9.46997 7.76384 9.46859L4.69637 8.02171C4.42 7.89141 4.3016 7.56165 4.43189 7.28528C4.56219 7.00907 4.89195 6.89051 5.16832 7.0208L7.44651 8.09515V3.31995C7.44651 3.0144 7.69424 2.76667 7.99979 2.76667C8.30533 2.76667 8.55307 3.0144 8.55307 3.31995V8.968H8.55317C8.55317 8.97131 8.55221 8.97461 8.55221 8.97797Z"
        fill="#7D8699"
      />
    </Svg>
  );
}

const SvgCookTime = React.memo(SvgComponent);
export default SvgCookTime;