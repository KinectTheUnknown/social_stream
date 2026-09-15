(function () {
  /**
   * @satisfies {Record<Exclude<LoyaltyTier, "NO_TIER">, string>}
   */
  const loyaltyBadges = {
    BRONZE: `<svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px;"><g filter="url(#filter0_ii_2347_181606)"><circle cx="32" cy="32" r="30" fill="url(#paint0_linear_2347_181606)"></circle></g><circle opacity="0.5" cx="32" cy="32" r="20" fill="url(#paint1_linear_2347_181606)"></circle><circle cx="32" cy="32" r="18.5" stroke="url(#paint2_linear_2347_181606)" stroke-width="3"></circle><g mix-blend-mode="multiply" opacity="0.7" clip-path="url(#clip0_2347_181606)"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.4998 24.5C35.4998 25.9108 34.6651 27.1266 33.4626 27.6806C34.0448 27.8707 34.592 28.1978 35.0538 28.662L35.8459 29.4583L37.6125 27.6823C37.8138 27.4798 38.0403 27.3182 38.2817 27.1971C38.1008 26.8111 37.9998 26.3802 37.9998 25.9258C37.9998 24.2689 39.3429 22.9258 40.9998 22.9258C42.6566 22.9258 43.9998 24.2689 43.9998 25.9258C43.9998 27.269 43.117 28.406 41.9 28.7884C41.9839 29.0827 42.0154 29.3927 41.9896 29.7042L41.5506 35H22.4475L22.0085 29.7042C21.9827 29.3925 22.0142 29.0824 22.0983 28.788C20.8819 28.4052 19.9998 27.2685 19.9998 25.9258C19.9998 24.2689 21.3429 22.9258 22.9998 22.9258C24.6566 22.9258 25.9998 24.2689 25.9998 25.9258C25.9998 26.3805 25.8986 26.8115 25.7176 27.1977C25.9586 27.3187 26.1846 27.4801 26.3857 27.6823L28.1523 29.4583L28.9443 28.662C29.4063 28.1976 29.9538 27.8704 30.5364 27.6803C29.3342 27.1262 28.4998 25.9106 28.4998 24.5C28.4998 22.567 30.0668 21 31.9998 21C33.9328 21 35.4998 22.567 35.4998 24.5ZM22.6133 37L22.7235 38.3296C22.8954 40.4035 24.6288 41.9992 26.7098 41.9992H32.0499H32.05H37.2883C39.3693 41.9992 41.1027 40.4035 41.2746 38.3296L41.3848 37H22.6133Z" fill="#873400"></path></g><defs><filter id="filter0_ii_2347_181606" x="2" y="-1" width="60" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="3"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.717647 0 0 0 0 0.0862745 0 0 0 0.5 0"></feColorMatrix><feBlend mode="screen" in2="shape" result="effect1_innerShadow_2347_181606"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="-3"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.760784 0 0 0 0 0.356863 0 0 0 0 0.0666667 0 0 0 0.6 0"></feColorMatrix><feBlend mode="multiply" in2="effect1_innerShadow_2347_181606" result="effect2_innerShadow_2347_181606"></feBlend></filter><linearGradient id="paint0_linear_2347_181606" x1="31.9312" y1="55.0006" x2="31.9295" y2="2.76892" gradientUnits="userSpaceOnUse"><stop stop-color="#BB650C"></stop><stop offset="1" stop-color="#FFB659"></stop></linearGradient><linearGradient id="paint1_linear_2347_181606" x1="32" y1="12" x2="32" y2="51.0476" gradientUnits="userSpaceOnUse"><stop offset="0.609756" stop-color="white" stop-opacity="0"></stop><stop offset="0.95" stop-color="#943E0F"></stop></linearGradient><linearGradient id="paint2_linear_2347_181606" x1="32" y1="52" x2="32" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#FECD78"></stop><stop offset="1" stop-color="#923D0E"></stop></linearGradient><clipPath id="clip0_2347_181606"><rect width="24" height="24" fill="white" transform="translate(20 20)"></rect></clipPath></defs></svg>`,
    SILVER: `<svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px;"><path d="M5.14124 19.0805C1.57841 21.6567 0.116202 26.2578 1.53817 30.4181L9.3369 53.2356C10.72 57.2821 14.5231 60.0014 18.7995 60.0014H45.1998C49.4762 60.0014 53.2793 57.2821 54.6624 53.2356L62.4611 30.4181C63.8831 26.2578 62.4209 21.6567 58.858 19.0805L37.8591 3.89652C34.362 1.36783 29.6372 1.36783 26.1402 3.89652L5.14124 19.0805Z" fill="url(#paint0_linear_2347_181605)"></path><circle opacity="0.6" cx="31.9998" cy="33" r="20" fill="url(#paint1_linear_2347_181605)"></circle><circle cx="31.9998" cy="33" r="18.5" stroke="url(#paint2_linear_2347_181605)" stroke-width="3"></circle><g mix-blend-mode="multiply" opacity="0.9" clip-path="url(#clip0_2347_181605)"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.4998 25.5C35.4998 26.9108 34.6651 28.1266 33.4626 28.6806C34.0448 28.8707 34.592 29.1978 35.0538 29.662L35.8459 30.4583L37.6125 28.6823C37.8138 28.4798 38.0403 28.3182 38.2817 28.1971C38.1008 27.8111 37.9998 27.3802 37.9998 26.9258C37.9998 25.2689 39.3429 23.9258 40.9998 23.9258C42.6566 23.9258 43.9998 25.2689 43.9998 26.9258C43.9998 28.269 43.117 29.406 41.9 29.7884C41.9839 30.0827 42.0154 30.3927 41.9896 30.7042L41.5506 36H22.4475L22.0085 30.7042C21.9827 30.3925 22.0142 30.0824 22.0983 29.788C20.8819 29.4052 19.9998 28.2685 19.9998 26.9258C19.9998 25.2689 21.3429 23.9258 22.9998 23.9258C24.6566 23.9258 25.9998 25.2689 25.9998 26.9258C25.9998 27.3805 25.8986 27.8115 25.7176 28.1977C25.9586 28.3187 26.1846 28.4801 26.3857 28.6823L28.1523 30.4583L28.9443 29.662C29.4063 29.1976 29.9538 28.8704 30.5364 28.6803C29.3342 28.1262 28.4998 26.9106 28.4998 25.5C28.4998 23.567 30.0668 22 31.9998 22C33.9328 22 35.4998 23.567 35.4998 25.5ZM22.6133 38L22.7235 39.3296C22.8954 41.4035 24.6288 42.9992 26.7098 42.9992H32.0499H32.05H37.2883C39.3693 42.9992 41.1027 41.4035 41.2746 39.3296L41.3848 38H22.6133Z" fill="#787878"></path></g><defs><linearGradient id="paint0_linear_2347_181605" x1="31.9286" y1="2" x2="31.9991" y2="60" gradientUnits="userSpaceOnUse"><stop stop-color="#EDEDED"></stop><stop offset="0.189423" stop-color="#D5D5D5"></stop><stop offset="0.637804" stop-color="#BEBEBE"></stop><stop offset="1" stop-color="#686868"></stop></linearGradient><linearGradient id="paint1_linear_2347_181605" x1="31.9998" y1="13" x2="31.9998" y2="52.0476" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.95" stop-color="#7B7B7B"></stop></linearGradient><linearGradient id="paint2_linear_2347_181605" x1="31.9998" y1="53" x2="31.9998" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="#F1F1F1"></stop><stop offset="1" stop-color="#676767"></stop></linearGradient><clipPath id="clip0_2347_181605"><rect width="24" height="24" fill="white" transform="translate(20 21)"></rect></clipPath></defs></svg>`,
    GOLD: `<svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 31.0664V31.9967L4.00016 41.8689C4.00022 45.3484 5.87253 48.5588 8.90102 50.2722L27.2957 60.6791C30.2511 62.3511 33.8675 62.3478 36.8198 60.6703L55.1146 50.2754C58.1345 48.5596 60 45.3539 60 41.8807L60 31.9967L60 31.0664L60 22.1195C60 18.6463 58.1345 15.4406 55.1146 13.7248L36.8198 3.3299C33.8675 1.65244 30.2511 1.64911 27.2957 3.32113L8.90102 13.728C5.87252 15.4414 4.00021 18.6518 4.00016 22.1314L4 31.0664Z" fill="url(#paint0_linear_2347_181604)"></path><circle cx="32" cy="32.0001" r="18.5" stroke="url(#paint1_linear_2347_181604)" stroke-width="3"></circle><g mix-blend-mode="multiply" opacity="0.9"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 24.5C35.5 25.9108 34.6653 27.1266 33.4628 27.6806C34.0451 27.8707 34.5923 28.1978 35.054 28.662L35.8461 29.4583L37.6127 27.6823C37.8141 27.4798 38.0405 27.3182 38.2819 27.1971C38.1011 26.8111 38 26.3802 38 25.9258C38 24.2689 39.3431 22.9258 41 22.9258C42.6569 22.9258 44 24.2689 44 25.9258C44 27.269 43.1172 28.406 41.9002 28.7884C41.9842 29.0827 42.0157 29.3927 41.9898 29.7042L41.5509 35H22.4478L22.0088 29.7042C21.9829 29.3925 22.0145 29.0824 22.0985 28.788C20.8821 28.4052 20 27.2685 20 25.9258C20 24.2689 21.3431 22.9258 23 22.9258C24.6569 22.9258 26 24.2689 26 25.9258C26 26.3805 25.8989 26.8115 25.7178 27.1977C25.9588 27.3187 26.1849 27.4801 26.3859 27.6823L28.1525 29.4583L28.9446 28.662C29.4066 28.1976 29.9541 27.8704 30.5366 27.6803C29.3344 27.1262 28.5 25.9106 28.5 24.5C28.5 22.567 30.067 21 32 21C33.933 21 35.5 22.567 35.5 24.5ZM22.6135 37L22.7238 38.3296C22.8957 40.4035 24.6291 41.9992 26.7101 41.9992H32.0502H32.0503H37.2885C39.3696 41.9992 41.103 40.4035 41.2749 38.3296L41.3851 37H22.6135Z" fill="#8F6F43"></path></g><defs><linearGradient id="paint0_linear_2347_181604" x1="32" y1="62" x2="31.9337" y2="2.8366" gradientUnits="userSpaceOnUse"><stop stop-color="#937500"></stop><stop offset="0.358238" stop-color="#DAC263"></stop><stop offset="0.709939" stop-color="#E8D88B"></stop><stop offset="1" stop-color="#FFF6C1"></stop></linearGradient><linearGradient id="paint1_linear_2347_181604" x1="32" y1="52.0001" x2="32" y2="12.0001" gradientUnits="userSpaceOnUse"><stop stop-color="#F4EAAC"></stop><stop offset="1" stop-color="#BB9E38"></stop></linearGradient></defs></svg>`,
    PLATINUM: `<svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.0687 3.92893C35.1635 0.023689 28.8318 0.0236896 24.9266 3.92893L21.7056 7.14994H17.1501C11.6272 7.14994 7.15006 11.6271 7.15006 17.1499V21.7055L3.92893 24.9266C0.023689 28.8318 0.0236896 35.1635 3.92893 39.0687L7.15006 42.2899V46.8451C7.15006 52.368 11.6272 56.8451 17.1501 56.8451H21.7053L24.9266 60.0664C28.8318 63.9717 35.1635 63.9717 39.0687 60.0664L42.29 56.8451H46.8453C52.3681 56.8451 56.8453 52.368 56.8453 46.8451V42.2899L60.0664 39.0687C63.9717 35.1635 63.9717 28.8318 60.0664 24.9266L56.8453 21.7054V17.1499C56.8453 11.6271 52.3681 7.14994 46.8452 7.14994H42.2897L39.0687 3.92893Z" fill="url(#paint0_linear_2347_181603)"></path><circle opacity="0.6" cx="32" cy="33" r="20" fill="url(#paint1_linear_2347_181603)"></circle><circle cx="32" cy="33" r="18.5" stroke="url(#paint2_linear_2347_181603)" stroke-width="3"></circle><g mix-blend-mode="multiply" opacity="0.9" clip-path="url(#clip0_2347_181603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.5017 25.5023C35.5017 26.9131 34.667 28.1289 33.4645 28.6829C34.0468 28.873 34.594 29.2001 35.0557 29.6643L35.8478 30.4606L37.6144 28.6846C37.8158 28.4822 38.0422 28.3205 38.2836 28.1994C38.1028 27.8134 38.0017 27.3826 38.0017 26.9281C38.0017 25.2712 39.3449 23.9281 41.0017 23.9281C42.6586 23.9281 44.0017 25.2712 44.0017 26.9281C44.0017 28.2713 43.119 29.4083 41.9019 29.7907C41.9859 30.085 42.0174 30.395 41.9916 30.7065L41.5526 36.0023H22.4495L22.0105 30.7065C21.9847 30.3949 22.0162 30.0847 22.1002 29.7903C20.8839 29.4076 20.0017 28.2708 20.0017 26.9281C20.0017 25.2712 21.3449 23.9281 23.0017 23.9281C24.6586 23.9281 26.0017 25.2712 26.0017 26.9281C26.0017 27.3828 25.9006 27.8138 25.7195 28.2C25.9605 28.321 26.1866 28.4825 26.3876 28.6846L28.1542 30.4606L28.9463 29.6643C29.4083 29.1999 29.9558 28.8727 30.5383 28.6826C29.3361 28.1286 28.5017 26.9129 28.5017 25.5023C28.5017 23.5693 30.0687 22.0023 32.0017 22.0023C33.9347 22.0023 35.5017 23.5693 35.5017 25.5023ZM22.6153 38.0023L22.7255 39.3319C22.8974 41.4059 24.6308 43.0015 26.7118 43.0015H32.0519H32.052H37.2903C39.3713 43.0015 41.1047 41.4059 41.2766 39.3319L41.3868 38.0023H22.6153Z" fill="#759192" mix-blend-mode="multiply"></path></g><defs><linearGradient id="paint0_linear_2347_181603" x1="32" y1="63" x2="31.9246" y2="1.79449" gradientUnits="userSpaceOnUse"><stop stop-color="#7D7D7D"></stop><stop offset="0.335113" stop-color="#D0D0D0"></stop><stop offset="0.784409" stop-color="#F0F0F0"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="paint1_linear_2347_181603" x1="32" y1="13" x2="32" y2="52.0476" gradientUnits="userSpaceOnUse"><stop offset="0.0640244" stop-color="white" stop-opacity="0"></stop><stop offset="0.95" stop-color="white"></stop></linearGradient><linearGradient id="paint2_linear_2347_181603" x1="32" y1="53" x2="32" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="#96A4A5"></stop></linearGradient><clipPath id="clip0_2347_181603"><rect width="24" height="24" fill="white" transform="translate(20.002 21.0023)"></rect></clipPath></defs></svg>`,
    DIAMOND: `<svg width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 16px; width: 16px;"><path d="M4.17316 38.9988C1.14608 36.0711 0.277638 31.5606 2.00119 27.7182L9.9903 9.9074C11.6026 6.31298 15.175 4.00008 19.1144 4.00008H44.8843C48.8237 4.00008 52.3961 6.31297 54.0084 9.90739L61.9975 27.7182C63.7211 31.5606 62.8526 36.0711 59.8255 38.9988L38.9515 59.188C35.075 62.9373 28.9237 62.9373 25.0472 59.188L4.17316 38.9988Z" fill="url(#paint0_linear_2347_181602)"/><circle opacity="0.5" cx="31.9998" cy="30" r="20" fill="url(#paint1_linear_2347_181602)"/><circle cx="31.9998" cy="30" r="18.5" stroke="url(#paint2_linear_2347_181602)" stroke-width="3"/><g mix-blend-mode="multiply" opacity="0.9" clip-path="url(#clip0_2347_181602)"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.4998 22.5C35.4998 23.9108 34.6651 25.1266 33.4626 25.6806C34.0448 25.8707 34.592 26.1978 35.0538 26.662L35.8459 27.4583L37.6125 25.6823C37.8138 25.4798 38.0403 25.3182 38.2817 25.1971C38.1008 24.8111 37.9998 24.3802 37.9998 23.9258C37.9998 22.2689 39.3429 20.9258 40.9998 20.9258C42.6566 20.9258 43.9998 22.2689 43.9998 23.9258C43.9998 25.269 43.117 26.406 41.9 26.7884C41.9839 27.0827 42.0154 27.3927 41.9896 27.7042L41.5506 33H22.4475L22.0085 27.7042C21.9827 27.3925 22.0142 27.0824 22.0983 26.788C20.8819 26.4052 19.9998 25.2685 19.9998 23.9258C19.9998 22.2689 21.3429 20.9258 22.9998 20.9258C24.6566 20.9258 25.9998 22.2689 25.9998 23.9258C25.9998 24.3805 25.8986 24.8115 25.7176 25.1977C25.9586 25.3187 26.1846 25.4801 26.3857 25.6823L28.1523 27.4583L28.9443 26.662C29.4063 26.1976 29.9538 25.8704 30.5366 25.6803C29.3342 25.1262 28.4998 23.9106 28.4998 22.5C28.4998 20.567 30.0668 19 31.9998 19C33.9328 19 35.4998 20.567 35.4998 22.5ZM22.6133 35L22.7235 36.3296C22.8954 38.4035 24.6288 39.9992 26.7098 39.9992H32.0499H32.05H37.2883C39.3693 39.9992 41.1027 38.4035 41.2746 36.3296L41.3848 35H22.6133Z" fill="#0B8DB3" mix-blend-mode="multiply"/></g><defs><linearGradient id="paint0_linear_2347_181602" x1="32" y1="4" x2="31.9982" y2="62" gradientUnits="userSpaceOnUse"><stop stop-color="#CAFFFF"/><stop offset="0.191589" stop-color="#90F4FB"/><stop offset="0.603924" stop-color="#43D3EE"/><stop offset="1" stop-color="#1895B1"/></linearGradient><linearGradient id="paint1_linear_2347_181602" x1="31.9998" y1="10" x2="31.9998" y2="49.0476" gradientUnits="userSpaceOnUse"><stop offset="0.609756" stop-color="white" stop-opacity="0"/><stop offset="0.95" stop-color="#35B9C9"/></linearGradient><linearGradient id="paint2_linear_2347_181602" x1="31.9998" y1="50" x2="31.9998" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#B4FFFF"/><stop offset="1" stop-color="#149AC7"/></linearGradient><clipPath id="clip0_2347_181602"><rect width="24" height="24" fill="white" transform="translate(20 18)"/></clipPath></defs></svg>`,
  };
  const userBadges = {
    nominatedMod: '<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 1.25em; width: auto; vertical-align: middle; margin-top: -0.15em;"><rect width="28" height="16" rx="2" fill="#1e1f22"/><text x="14" y="11" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="10px" font-weight="bold" style="-webkit-text-stroke: 0px; text-shadow: none; stroke: none;">Mod</text></svg>',
    booster: '<svg width="46" height="16" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 1.25em; width: auto; vertical-align: middle; margin-top: -0.15em;"><rect width="46" height="16" rx="2" fill="#ffffff"/><text x="23" y="11" text-anchor="middle" fill="#000000" font-family="sans-serif" font-size="10px" font-weight="bold" style="-webkit-text-stroke: 0px; text-shadow: none; stroke: none;">Booster</text></svg>',
    returningBuyer: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" class="fill-current" role="presentation" style="height: 1.25em; width: 1.25em; vertical-align: middle; margin-top: -0.15em;"><path d="M7 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" fill="#00df82" style="-webkit-text-stroke: 0px; text-shadow: none; stroke: none;"></path><path fill-rule="evenodd" d="M12 0a4 4 0 0 0-4 4v2H4a2 2 0 0 0-2 2v7.873l-.894 3.354A3 3 0 0 0 4.005 23H20a3 3 0 0 0 2.899-3.773l-.9-3.375V8a2 2 0 0 0-2-2h-4V4a4 4 0 0 0-4-4m2 6V4a2 2 0 1 0-4 0v2zM4 16.135l-.962 3.607A1 1 0 0 0 4.005 21H20a1 1 0 0 0 .966-1.258L20 16.114V8H4z" clip-rule="evenodd" fill="#00df82" style="-webkit-text-stroke: 0px; text-shadow: none; stroke: none;"></path></svg>',
    newBuyer: '<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 1.25em; width: auto; vertical-align: middle; margin-top: -0.15em;"><text x="13" y="5.5" dominant-baseline="middle" text-anchor="middle" fill="#00df82" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="6.5px" font-weight="700" style="text-shadow: none !important; -webkit-text-stroke: 0px transparent !important; text-stroke: 0px transparent !important; stroke: none !important;">New</text><text x="13" y="12.5" dominant-baseline="middle" text-anchor="middle" fill="#00df82" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="6.5px" font-weight="700" style="text-shadow: none !important; -webkit-text-stroke: 0px transparent !important; text-stroke: 0px transparent !important; stroke: none !important;">Buyer</text></svg>',
  };
  let isExtensionOn = true;
  /** @type {ExtensionSettings} */
  let settings = {};
  /**
   * 
   * @param {string?} [unsafe] 
   * @returns {string}
   */
  function escapeHtml(unsafe) {
    try {
      if (settings.textonlymode) {
        return unsafe || "";
      }
      return (unsafe || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    } catch (e) {
      return "";
    }
  }

  /**
   * @abstract
   * Represents an abstract recurring asynchronous task with queuing and timeout controls.
   */
  class RecurringTask {
    /**
     * @param {number} [interval=0] The execution interval in seconds (positive to repeat, 0 to run on update, negative to disable).
     * @param {number} [timeout=0] The maximum expected run time in seconds (0 for no timeout).
     * @param {boolean} [startImmediately=true] Whether the task should start running by default.
     */
    constructor(interval = 0, timeout = 0, startImmediately = true) {
      /** @type {number} The number of seconds to wait between running the task */
      this._interval = interval;
      /** @type {number} The max expected time in seconds that a task should run for */
      this._timeout = timeout;

      /** @type {number?} Timer ID for the recurring interval */
      this._timer = null;
      /** @type {boolean} True if the task is currently executing */
      this._isRunning = false;
      /** @type {boolean} True if a subsequent run is queued to execute after the current one completes */
      this._isQueued = false;
      /** @type {number} Tracker for the current execution promise ID */
      this._currentPromiseId = 0;
      /** @type {boolean} True if the task has been stopped */
      this._stopped = !startImmediately;

      if (startImmediately) {
        this._startTimer();
      }
    }

    /**
     * The task logic to execute. Must be implemented by subclasses.
     * @abstract
     * @returns {Promise<void>|void}
     */
    executeTask() {
      throw new Error("Must be implemented by subclass");
    }

    /**
     * Starts or resumes the task running according to its set interval.
     */
    start() {
      if (!this._stopped) {
        return;
      }
      this._stopped = false;
      this._startTimer();
    }

    /**
     * Prevents the task from running without changing the interval.
     * Note: Subclasses overriding this method must call super.stop() last.
     */
    stop() {
      this._stopped = true;
      this._stopTimer();
    }

    /**
     * Updates the recurring execution interval and adjusts active timers.
     * @param {number} newInterval The new interval in seconds.
     */
    updateInterval(newInterval) {
      if (this._interval === newInterval) {
        return;
      }
      this._interval = newInterval;
      this._isQueued = false;
      if (!this._stopped) {
        this._startTimer();
      }
    }

    /**
     * Call this method whenever the state has been updated. This will handle the task execution.
     * @protected
     */
    markStateUpdated() {
      if (this._interval === 0) {
        this._runTask();
      }
    }

    /**
     * Starts the recurring interval timer.
     * @private
     */
    _startTimer() {
      this._stopTimer();
      if (!this._stopped && this._interval > 0) {
        this._timer = setInterval(() => {
          this._runTask();
        }, this._interval * 1000);
      }
    }

    /**
     * Stops and cancels the recurring interval timer.
     * @private
     */
    _stopTimer() {
      if (this._timer) {
        clearInterval(this._timer);
        this._timer = null;
      }
    }

    /**
     * Invokes the task with safety checks, timeout enforcement, and promise tracking.
     * @private
     * @returns {Promise<void>}
     */
    async _runTask() {
      if (this._stopped) {
        return;
      }
      if (this._isRunning) {
        if (!this._isQueued) {
          this._isQueued = true;
        }
        return;
      }

      this._isRunning = true;
      var promiseId = ++this._currentPromiseId;

      /** @type {number?} */
      var timeoutTimer = null;
      var hasTimedOut = false;

      if (this._timeout > 0) {
        timeoutTimer = setTimeout(() => {
          if (promiseId === this._currentPromiseId && this._isRunning) {
            hasTimedOut = true;
            console.warn("[RecurringTask] Task execution exceeded timeout of " + this._timeout + " seconds.");
            this._handleTaskCompletion(promiseId);
          }
        }, this._timeout * 1000);
      }

      try {
        await this.executeTask();
      } catch (error) {
        if (!hasTimedOut && promiseId === this._currentPromiseId) {
          console.error("[RecurringTask] Error executing task:", error);
        }
      } finally {
        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        }
        if (!hasTimedOut && promiseId === this._currentPromiseId) {
          this._handleTaskCompletion(promiseId);
        }
      }
    }

    /**
     * Marks the active execution as complete and triggers queued execution if any.
     * @private
     * @param {number} promiseId The ID of the finished execution.
     */
    _handleTaskCompletion(promiseId) {
      if (promiseId !== this._currentPromiseId) {
        return;
      }
      this._isRunning = false;
      if (this._isQueued) {
        this._isQueued = false;
        setTimeout(() => {
          this._runTask();
        }, 0);
      }
    }
  }

  function pushCommand(payload) {
    return new Promise((res, rej) => {
      chrome.runtime.sendMessage(
        chrome.runtime.id,
        payload,
        (data) => chrome.runtime?.lastError ? rej(chrome.runtime.lastError) : res(data)
      );
    });
  }

  /**
   * @param {*} data 
   * @returns {string}
   */
  function normalizeWebSocketData(data) {
    try {
      if (typeof data === "string") {
        return data;
      }
      if (typeof ArrayBuffer !== "undefined" && data instanceof ArrayBuffer) {
        return new TextDecoder().decode(new Uint8Array(data));
      }
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(data)) {
        return new TextDecoder().decode(data);
      }
    } catch (e) { }
    return String(data || "");
  }

  /**
   * @param {*} value 
   * @returns {string}
   */
  function formatWebSocketMessageText(value) {
    var text = value == null ? "" : String(value);
    return settings.textonlymode ? text : escapeHtml(text);
  }

  /**
   * 
   * @param {Money} value 
   * @param {number} [magnitude] 
   * @returns 
   */
  function getMoneyDetails(value, magnitude) {
    var amount = 1;
    var currency = "";
    if (!magnitude || !Number.isFinite(magnitude)) magnitude = 0.01;
    if (magnitude < 0 || magnitude >= 1) {
      console.warn("Got invalid magnitude ", magnitude);
      magnitude = 0.01;
    }

    if (typeof value === "number") {
      amount = value;
    } else if (value && typeof value === "object") {
      if (typeof value.amount === "number") {
        amount = value.amount;
      }
      currency = value.currency || "";
    }
    if (!Number.isFinite(amount) || amount <= 0) {
      return null;
    }
    return {
      amount: amount * magnitude,
      currency: currency
    };
  }

  /**
   * 
   * @param {Money} value 
   * @param {number} [magnitude] 
   * @returns 
   */
  function formatMoneyValue(value, magnitude) {
    var money = getMoneyDetails(value, magnitude);
    if (!money) {
      return "";
    }
    if (money.currency) {
      try {
        return new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: money.currency,
          maximumFractionDigits: 2,
        }).format(money.amount) + " " + money.currency;
      } catch (e) {
        return money.amount.toFixed(2) + " " + money.currency;
      }
    }
    return String(money.amount);
  }

  /**
   * @param {LivestreamShopState} shopState 
   * @returns {string?}
   */
  function getShopStateTotalCount(shopState) {
    if (!shopState || typeof shopState !== "object") {
      return null;
    }
    if ("totalCount" in shopState) {
      return shopState.totalCount;
    }
    if ("total_count" in shopState) {
      return shopState.total_count;
    }
    return null;
  }

  /**
   * @param {string} wsChannel 
   * @param {string} eventType 
   * @param {Partial<AllWhatnotPayload>} payload 
   * @param {Partial<NewMessageUser>} [user] 
   * @returns {WhatnotMeta}
   */
  function buildWebSocketMeta(wsChannel, eventType, payload, user) {
    /** @type {WhatnotMeta} */
    var meta = {
      transport: "websocket",
      websocketEvent: eventType
    };
    var topic = payload && payload.topic ? payload.topic : wsChannel;
    if (topic) {
      meta.topic = topic;
    }
    if (payload && payload.id) {
      meta.messageId = payload.id;
    }
    if (payload && payload.type) {
      meta.messageType = payload.type;
    }
    //if (payload && payload.eventName) {
    //  meta.activityEvent = payload.eventName;
    //}
    if (payload && typeof payload.timestamp === "number") {
      meta.timestamp = payload.timestamp;
    }
    if (payload && payload.livestreamId) {
      meta.livestreamId = payload.livestreamId;
    }
    if (payload && Array.isArray(payload.taggedUsers) && payload.taggedUsers.length) {
      meta.taggedUsers = payload.taggedUsers.map(function (taggedUser) {
        return {
          id: taggedUser && taggedUser.id ? taggedUser.id : "",
          username: taggedUser && taggedUser.username ? taggedUser.username : ""
        };
      });
    }
    if (user && typeof user.daysSinceCreated === "number") {
      meta.daysSinceCreated = user.daysSinceCreated;
    }
    if (user && user.username) {
      meta.profile = "/user/" + encodeURIComponent(user.username);
    }
    if (user && user.isHost) {
      meta.host = true;
    }
    if (user && user.isCohost) {
      meta.cohost = true;
    }
    if (user && user.isTopBuyer) {
      meta.topBuyer = true;
    }
    if (user && user.isNewUser) {
      meta.newUser = true;
    }
    if (user && user.isBooster) {
      meta.booster = true;
    }
    return meta;
  }
  /**
   * @param {Omit<SourceEventData, "type" | "question" | "chatname" | "membership" | "userid"> & { chatname?: string }} data 
   * @param {NewMessageUser} user 
   * @returns {SourceEventData}
   */
  function createChatMessage(data, user) {
    /** @type {Omit<SourceEventData, "type">} */
    const eventData = {
      ...data,
      chatname: user.username,
      userid: user.id,
      question: !data.event && data.chatmessage?.includes("?"),
      chatimg: user?.profileImage?.url,
    };

    return createEventMessage(eventData);
  }
  /**
   * 
   * @param {Omit<SourceEventData, "type">} data 
   */
  function createEventMessage(data) {
    const eventData = {
      ...data,
      type: "whatnot"
    };

    return eventData;
  }
  /**
   * 
   * @param {Partial<NewMessageUser>} user 
   * @param {string} messageText 
   * @returns {SourceEventData}
   */
  function createWebSocketChatData(user, messageText) {
    /** @type {SourceEventData} */
    var data = {};
    data.chatname = escapeHtml(user && user.username ? user.username : "");
    data.chatbadges = [];
    //data.backgroundColor = "";
    //data.textColor = "";
    //data.nameColor = "";
    data.chatmessage = formatWebSocketMessageText(messageText);
    data.chatimg = user?.profileImage?.url;
    if (user?.profileImage?.url) console.log("PFP", user?.profileImage?.url);
    //data.hasDonation = "";
    //data.membership = "";
    //data.contentimg = "";
    data.type = "whatnot";
    if (user && user.id) {
      data.userid = user.id;
    }
    if (user && user.loyaltyTierForSeller && user.loyaltyTierForSeller !== "NO_TIER") {
      console.log(user.username, "Loyalty", user.loyaltyTierForSeller, "Enabled", user.loyaltyVisibilityStatusEnabled);
      data.membership = user.loyaltyTierForSeller;
      data.chatbadges.push({
        type: "svg",
        html: loyaltyBadges[user.loyaltyTierForSeller],
        text: user.loyaltyTierForSeller,
      });
    }
    if (user && user.isNominatedModerator) {
      data.moderator = true;
      data.chatbadges.push({
        type: "svg",
        html: userBadges.nominatedMod,
        text: "Mod",
      });
    }
    if (user && user.isBooster) {
      data.chatbadges.push({
        type: "svg",
        html: userBadges.booster,
        text: "Booster",
      });
    }
    if (user && (user.isModerator || user.isEmployee)) {
      data.admin = true;
    }
    return data;
  }

  /**
 * @param {string} wsChannel 
 * @param {string} eventType 
 * @param {IntersectObjectUnion<WhatnotEvents[keyof WhatnotEvents]>} payload
 * @param {Partial<NewMessageUser>} user 
 * @returns {WhatnotMeta}
 */
  function createEventMeta(wsChannel, eventType, payload, user) {
    /** @type {WhatnotMeta} */
    var meta = {
      transport: "websocket",
      websocketEvent: eventType
    };
    var topic = payload && payload.topic ? payload.topic : wsChannel;
    if (topic) {
      meta.topic = topic;
    }
    if (payload && payload.id) {
      meta.messageId = payload.id;
    }
    if (payload && payload.type) {
      meta.messageType = payload.type;
    }
    //if (payload && payload.eventName) {
    //  meta.activityEvent = payload.eventName;
    //}
    if (payload && typeof payload.timestamp === "number") {
      meta.timestamp = payload.timestamp;
    }
    if (payload && payload.livestreamId) {
      meta.livestreamId = payload.livestreamId;
    }
    if (payload && Array.isArray(payload.taggedUsers) && payload.taggedUsers.length) {
      meta.taggedUsers = payload.taggedUsers;
    }
    if (user && typeof user.daysSinceCreated === "number") {
      meta.daysSinceCreated = user.daysSinceCreated;
    }
    if (user && user.username) {
      meta.profile = "/user/" + encodeURIComponent(user.username);
    }
    if (user && user.isHost) {
      meta.host = true;
    }
    if (user && user.isCohost) {
      meta.cohost = true;
    }
    if (user && user.isTopBuyer) {
      meta.topBuyer = true;
    }
    if (user && user.isNewUser) {
      meta.newUser = true;
    }
    if (user && user.isBooster) {
      meta.booster = true;
    }

    return meta;
  }

  /**
   * 
   * @param {Livestream} payload 
   * @returns 
   */
  function handleLivestreamUpdate(payload) {
    if (!payload || typeof payload !== "object") {
      return;
    }
    if (typeof payload.activeViewers !== "undefined") {
      viewerCountTask.setViewerCount(payload.activeViewers);
    }
  }

  /**
   * 
   * @param {GiveawayEntryCountUpdatedPayload} payload 
   * @returns 
   */
  function handleGiveawayEntryUpdate(payload) {
    if (!payload || typeof payload !== "object") {
      return;
    }
    // TODO: Implement event code
  }

  // function handleWebSocketBoostContribution(activity, wsChannel) {
  //   if (!activity || typeof activity !== "object") {
  //     return;
  //   }
  //   var info = activity.eventSpecificInfo || {};
  //   var user = activity.activityPerformingUser || {};
  //   var messageText = info.contributionMessage || "Community boost";
  //   var data = createWebSocketChatData(user, messageText);
  //   var money = getMoneyDetails(info.contributionMoney);
  //   data.event = "donation";
  //   data.hasDonation = formatMoneyValue(info.contributionMoney);
  //   if (money) {
  //     data.donoValue = money.amount;
  //   }
  //   var meta = buildWebSocketMeta(wsChannel, activity.eventName || "COMMUNITY_BOOST_CONTRIBUTION_PURCHASED", activity, user);
  //   meta.boost = true;
  //   if (info.contributionMessage) {
  //     meta.contributionMessage = info.contributionMessage;
  //   }
  //   if (money && money.currency) {
  //     meta.currency = money.currency;
  //   }
  //   data.meta = meta;
  //   pushMessage(data);
  // }

  /**
   * 
   * @param {PhxReplyPayload} payload 
   * @param {string} wsChannel 
   * @returns 
   */
  function handlePhxReply(payload, wsChannel) {
    if (!payload || typeof payload !== "object" || payload.status !== "ok") {
      return;
    }
    var response = payload.response;
    if (!response || typeof response !== "object") {
      return;
    }
    if (response.livestream && typeof response.livestream === "object") {
      handleLivestreamUpdate(response.livestream);
    }

    // TODO: Re-add this back in, but handle it in a better way so that events aren't duplicated.
    // if (!Array.isArray(response.latestLiveActivityEvents) || !response.latestLiveActivityEvents.length) {
    //   return;
    // }
    // var shouldRefreshSnapshots = false;
    // for (var i = 0; i < response.latestLiveActivityEvents.length; i++) {
    //   if (handleWebSocketActivityEvent(response.latestLiveActivityEvents[i], wsChannel)) {
    //     shouldRefreshSnapshots = true;
    //   }
    // }
    // if (shouldRefreshSnapshots) {
    //   scheduleWebSocketSnapshotRefresh();
    // }
  }

  /**
   * @template {string | number} T
   */
  class FixedSizeQueue {
    /**
     * 
     * @param {number} capacity 
     */
    constructor(capacity) {
      this.capacity = capacity;
      /**
       * Undefined values indicate an empty slot in the queue (if not queued by the caller)
       * @type {(T | undefined)[]}
       * @protected
       */
      this.queue = new Array(capacity);
      /**
       * The index of the 1st element (or to-be placed element if not already placed)
       * @protected
       */
      this.head = 0;
      /**
       * The index of the next available slot in the queue
       * @protected
       */
      this.tail = 0;
      /**
       * The number of elements in the queue
       * @protected
       */
      this.size = 0;
      /**
       * Set of items currently in the queue for O(1) lookup
       * @type {Set<T>}
       * @protected
       */
      this.set = new Set();
    }

    /**
     * Adds an item to the Queue
     * @param {T} item 
     * @returns {boolean} True if added, false if already in the queue
     */
    enqueue(item) {
      if (this.set.has(item)) {
        return false;
      }

      if (this.size === this.capacity) {
        const oldest = this.queue[this.head];
        if (oldest !== undefined) {
          this.set.delete(oldest);
        }
        this.head = (this.head + 1) % this.capacity;
      } else {
        this.size++;
      }

      this.queue[this.tail] = item;
      this.set.add(item);
      this.tail = (this.tail + 1) % this.capacity;
      return true;
    }

    /**
     * Removes and returns the oldest element in the queue
     * @returns {T | null}
     */
    dequeue() {
      if (this.size === 0) return null;

      // We already know that the item at the head is not undefined since size > 0
      const item = /** @type {T} */ (this.queue[this.head]);
      this.queue[this.head] = undefined;
      this.set.delete(item);
      this.head = (this.head + 1) % this.capacity;
      this.size--;

      return item;
    }

    /**
     * Checks if the item exists in the queue
     * @param {T} item 
     * @returns {boolean}
     */
    has(item) {
      return this.set.has(item);
    }
  }

  /**
   * @type {FixedSizeQueue<string>}
   */
  //const websocketIds = new FixedSizeQueue(250);
  const websocketIds = new FixedSizeQueue(50);
  /**
   * 
   * @param {string} id 
   * @returns 
   */
  function rememberWebSocketMessageId(id) {
    if (!id) return false;

    if (websocketIds.has(id)) return true;

    websocketIds.enqueue(id);
    return false;
  }

  /**
   * 
   * @param {NewMessagePayload} payload 
   * @param {string} wsChannel 
   * @returns 
   */
  function handleWebSocketChatMessage(payload, wsChannel) {
    if (!payload || typeof payload !== "object") {
      return;
    }
    if (rememberWebSocketMessageId(payload.id || "")) {
      return;
    }
    const user = payload.user || {};
    const messageText = payload.message == null ? "" : String(payload.message);
    if (!user.username && !messageText) {
      return;
    }
    //lastWebSocketChatAt = Date.now();
    const data = createWebSocketChatData(user, messageText);
    if (payload.buyerBadge) {
      if (payload.buyerBadge === "returning_buyer") {
        (data.chatbadges ??= []).push({
          type: "svg",
          html: userBadges.returningBuyer,
          text: "Returning Buyer",
        });
      } else if (payload.buyerBadge === "new_buyer") {
        (data.chatbadges ??= []).push(
          {
            type: "svg",
            html: userBadges.returningBuyer,
            text: "Returning Buyer",
          },
          {
            type: "svg",
            html: userBadges.newBuyer,
            text: "New Buyer",
          }
        );
      }
    }
    if (!data.event && messageText.includes("?")) {
      data.question = true;
    }
    if (payload.properties && payload.properties.adscb) {
      data.hasDonation = formatMoneyValue(payload.properties.adscb);
    }
    var meta = buildWebSocketMeta(wsChannel, "new_msg", payload, user);
    if (payload.type === "announcement") {
      meta.announcement = true;
    }
    if (payload.properties && Object.keys(payload.properties).length) {
      meta.properties = payload.properties;
    }
    data.meta = meta;
    pushMessage(data);
  }

  /**
   * 
   * @param {TipSentPayload} payload 
   * @param {string} wsChannel 
   * @returns 
   */
  function handleWebSocketTipSent(payload, wsChannel) {
    // Only handle tip events from the auction channel to avoid duplicates
    if (wsChannel.startsWith("chat:")) return;
    var tip = payload?.tip;
    if (!tip) return;
    const tipValue = tip.tipValue ?? { amount: 0, currency: "USD" };
    var user = tip.senderUser || {};
    var data = createWebSocketChatData(user, tip.message || "");
    data.event = "donation";
    data.hasDonation = formatMoneyValue(tipValue);
    var money = getMoneyDetails(tipValue);
    if (money) {
      data.donoValue = money.amount;
    }
    data.meta = buildWebSocketMeta(wsChannel, "tip_sent", payload, user);
    pushMessage(data);
  }


  /**
   * @template {string} S
   * @param {S} string
   * @returns {Capitalize<Lowercase<S>>}
   */
  function wordToProperCase(string) {
    return `${string[0].toLocaleUpperCase()}${string.slice(1).toLocaleLowerCase()}`;
  }

  /**
   * @template {string} S
   * @param {S} string
   * @returns {ScreamingSnakeToTitleCase<S>}
   */
  function screamingSnakeToTitleCase(string) {
    if (!string) return "";

    return string.split("_").filter(Boolean).map(wordToProperCase).join(" ");
  }

  /**
   * 
   * @param {UserLoyaltyTierLevelUpPayload} payload 
   * @param {string} wsChannel 
   * @returns 
   */
  function handleWebSocketLoyaltyLevelUp(payload, wsChannel) {
    var user = payload?.user;
    if (!user?.username) return;

    var tier = user.loyaltyTierForSeller;
    var data = createWebSocketChatData(user, `Unlocked ${screamingSnakeToTitleCase(tier)}`);
    data.event = "member";
    data.membership = tier;
    data.meta = buildWebSocketMeta(wsChannel, "user_loyalty_tier_level_up", payload, user);
    pushMessage(data);
  }

  /**
   * @param {HasBeenRaidedPayload} payload 
   * @param {string} wsChannel 
   */
  function handleWebSocketHasBeenRaided(payload, wsChannel) {
    const user = payload?.fromUser;
    if (!user?.username) {
      return;
    }
    const numRaiders = payload?.numRaiders;
    const messageText = `is raiding with a party of ${numRaiders}`;
    const data = createWebSocketChatData(user, messageText);
    data.event = "raid";
    data.backgroundColor = "#8956FB";
    const meta = buildWebSocketMeta(wsChannel, "has_been_raided", payload, user);
    if (typeof numRaiders === "number") {
      meta.viewers = numRaiders;
    }
    data.meta = meta;

    pushMessage(data);
  }

  class RaidUpdateTask extends RecurringTask {
    constructor() {
      super(15, 10, false);
      /** @type {User?} */
      this._fromUser = null;
      /** @type {User?} */
      this._toUser = null;
      /** @type {number} */
      this._numRaiders = 0;
      /** @type {(Partial<Livestream> & { id: string })?} */
      this._livestreamToRaid = null;
      /** @type {string?} */
      this._status = null;
      /** @type {string?} */
      this._wsChannel = null;
      /** @type {boolean} */
      this._messageSent = false;
    }

    /**
     * @param {RaidSelectedPayload} payload 
     * @param {string} wsChannel 
     */
    handleRaidSelected(payload, wsChannel) {
      if (payload.fromUser) this._fromUser = payload.fromUser;
      if (payload.toUser) {
        if (this._toUser?.username !== payload.toUser.username) {
          this._messageSent = false;
        }
        this._toUser = payload.toUser;
      }
      if (typeof payload.numRaiders === "number") this._numRaiders = payload.numRaiders;
      if (payload.livestreamToRaid) {
        this._livestreamToRaid = payload.livestreamToRaid;
      }
      this._status = "raid_selected";
      this._wsChannel = wsChannel;
      this.start();
      this.markStateUpdated();
    }

    /**
     * @param {RaidUpdatedPayload} payload 
     * @param {string} wsChannel 
     */
    handleRaidUpdated(payload, wsChannel) {
      if (typeof payload.numRaiders === "number") this._numRaiders = payload.numRaiders;
      this._status = "raid_updated";
      this._wsChannel = wsChannel;
      this.start();
      this.markStateUpdated();
    }

    /**
     * @param {RaidStartedPayload} payload 
     * @param {string} wsChannel 
     */
    handleRaidStarted(payload, wsChannel) {
      if (payload.fromUser) this._fromUser = payload.fromUser;
      if (typeof payload.numUsers === "number") this._numRaiders = payload.numUsers;
      if (payload.livestreamToRaid) {
        if (!this._livestreamToRaid || this._livestreamToRaid.id !== payload.livestreamToRaid) {
          this._livestreamToRaid = { id: payload.livestreamToRaid };
        }
      }
      this._status = "raid_started";
      this._wsChannel = wsChannel;
      this.executeTask();
      this.stop();
    }

    /**
     * Handles the cancellation of a raid.
     */
    handleRaidCancelled() {
      this.stop();
    }

    /**
     * Resets the raid properties and stops the recurring task.
     */
    stop() {
      this._fromUser = null;
      this._toUser = null;
      this._numRaiders = 0;
      this._livestreamToRaid = null;
      this._status = null;
      this._wsChannel = null;
      this._messageSent = false;
      super.stop();
    }

    async executeTask() {
      if (!isExtensionOn) {
        return;
      }

      let user = null;
      let messageText = "";

      if (this._status === "raid_selected" || this._status === "raid_updated") {
        user = this._toUser;
        if (!this._messageSent) {
          messageText = "has started a raid";
          this._messageSent = true;
        } else {
          messageText = "";
        }
      } else if (this._status === "raid_started") {
        user = this._fromUser;
        messageText = `is raiding with a party of ${this._numRaiders}`;
      }

      if (!user || !user.username) {
        return;
      }

      const meta = buildWebSocketMeta(this._wsChannel || "", this._status || "raid", {}, user);
      if (this._numRaiders > 0) {
        meta.viewers = this._numRaiders;
      }
      if (this._fromUser) {
        meta.fromUser = this._fromUser;
        meta.fromId = this._fromUser.id;
        meta.fromLogin = this._fromUser.username;
      }
      if (this._toUser) meta.toUser = this._toUser;
      if (this._livestreamToRaid) meta.livestreamToRaid = this._livestreamToRaid;

      if (messageText) {
        const data = createWebSocketChatData(user, messageText);
        data.event = "raid";
        data.meta = meta;

        return await pushMessage(data);
      } else {
        return await pushEventWithMeta("raid", meta);
      }
    }
  }

  /**
   * 
   * @param {PresenceDiffPayload} payload 
   * @param {string} wsChannel 
   * @returns 
   */
  function handleWebSocketPresenceDiff(payload, wsChannel) {
    var joins = payload && payload.joins && payload.joins[wsChannel] ? payload.joins[wsChannel].metas : null;
    if (!Array.isArray(joins)) {
      return;
    }
    if (!settings.capturejoinedevent) {
      return;
    }
    for (var i = 0; i < joins.length; i++) {
      var join = joins[i];
      var user = join.user;
      if (!user || !user.username) {
        continue;
      }

      let message = "joined 👋";
      const joinedFrom = join.joined_from;
      if (joinedFrom && joinedFrom.isSenderMe !== true && joinedFrom.senderUsername) {
        message = `👋 joined through a share link by @${joinedFrom.senderUsername}`;
      }

      var data = createWebSocketChatData(user, message);
      data.event = "join";
      data.meta = buildWebSocketMeta(wsChannel, "presence_diff", payload, user);
      pushMessage(data);
    }
  }

  function handleWhatnotWebSocketFrame(rawData) {
    console.log("Raw", rawData);
    /** @type {WhatnotWSReceiveData} */
    let parsedArray;

    if (Array.isArray(rawData)) {
      parsedArray = rawData;
      payloadText = rawData.toString();
    } else {
      var payloadText = normalizeWebSocketData(rawData);

      if (!payloadText) {
        return console.warn("Unable to parse", rawData);
      }
      try {
        parsedArray = JSON.parse(payloadText);
      } catch (e) {
        console.error("[Whatnot] Error parsing WS payload:", e, payloadText.substring(0, 100));
        return;
      }
    }

    console.log("Got Frame", parsedArray);

    if (!Array.isArray(parsedArray) || parsedArray.length < 5) {
      console.debug("[Whatnot] Ignoring WS frame, not an array or < 5 len:", payloadText ? payloadText.substring(0, 100) : "");
      return;
    }
    var wsChannel = parsedArray[2] || "";
    var eventType = parsedArray[3] || "";

    if (["new_msg", "tip_sent", "raid_started", "user_loyalty_tier_level_up"].includes(eventType)) {
      console.debug("[Whatnot] Handled WS eventType:", eventType);
    }

    switch (parsedArray[3]) {
      case "presence_diff":
        handleWebSocketPresenceDiff(parsedArray[4], wsChannel);
        return;
      case "new_msg":
        handleWebSocketChatMessage(parsedArray[4], wsChannel);
        return;
      case "tip_sent":
        handleWebSocketTipSent(parsedArray[4], wsChannel);
        return;
      case "raid_selected":
        raidUpdateTask.handleRaidSelected(parsedArray[4], wsChannel);
        return;
      case "raid_updated":
        raidUpdateTask.handleRaidUpdated(parsedArray[4], wsChannel);
        return;
      case "has_been_raided":
        handleWebSocketHasBeenRaided(parsedArray[4], wsChannel);
        return;
      case "raid_started":
        raidUpdateTask.handleRaidStarted(parsedArray[4], wsChannel);
        return;
      case "raid_cancelled":
        raidUpdateTask.handleRaidCancelled();
        return;
      case "user_loyalty_tier_level_up":
        handleWebSocketLoyaltyLevelUp(parsedArray[4], wsChannel);
        return;
      case "livestream_view_count_updated":
        viewerCountTask.setViewerCount(parsedArray[4].viewCount);
        return;
      case "livestream_update":
        handleLivestreamUpdate(parsedArray[4]);
        return;
      case "giveaway_entry_count_updated":
        handleGiveawayEntryUpdate(parsedArray[4]);
        return;
      case "product_pinned":
        auctionUpdateTask.pinProduct(parsedArray[4].product, parsedArray[4].livestreamShippingInfo);
        sendCommerceEvent("pin", parsedArray[4].product, undefined, wsChannel, parsedArray[4]);
        return;
      case "product_unpinned":
        auctionUpdateTask.unpinProduct();
        sendCommerceEvent("unpin", parsedArray[4].product, undefined, wsChannel, parsedArray[4]);
        return;
      case "new_bid":
        auctionUpdateTask.updateBid(parsedArray[4].highestBidder, parsedArray[4].product);
        sendAuctionBidEvent(parsedArray[4], wsChannel);
        return;
      case "auction_started":
        auctionUpdateTask.startAuction(parsedArray[4].product);
        sendAuctionEvent("start", parsedArray[4].product, wsChannel, parsedArray[4]);
        return;
      case "auction_ended":
        auctionUpdateTask.endAuction(parsedArray[4].product);
        sendAuctionEvent("end", parsedArray[4].product, wsChannel, parsedArray[4]);
        return;
      case "product_sold":
        auctionUpdateTask.sellProduct(parsedArray[4].product);
        sendAuctionEvent("sold", parsedArray[4].product, wsChannel, parsedArray[4]);
        return;
      case "product_created":
        sendCommerceEvent("create", parsedArray[4].product, undefined, wsChannel, parsedArray[4]);
        handleWebSocketSnapshotPayload(parsedArray[4]);
        return;
      case "product_deleted":
        sendCommerceEvent("delete", parsedArray[4].product, parsedArray[4].productId, wsChannel, parsedArray[4]);
        handleWebSocketSnapshotPayload(parsedArray[4]);
        return;
      case "giveaway_started":
      case "giveaway_won":
      case "payment_failed":
        handleWebSocketSnapshotPayload(parsedArray[4]);
        return;
      case "product_updated":
        auctionUpdateTask.updateProduct(parsedArray[4].product);
        return;
      case "user_joined":
        if (parsedArray[4] && parsedArray[4].pinnedProduct) {
          auctionUpdateTask.pinProduct(parsedArray[4].pinnedProduct);
        }
        return;
      case "phx_reply":
        handlePhxReply(parsedArray[4], wsChannel);
        return;
    }
  }

  function handleWebSocketSnapshotPayload(payload) {
    console.debug("[Whatnot] handleWebSocketSnapshotPayload called:", payload);
  }

  /**
   * Sends a live auction event.
   * @param {"start" | "end" | "sold"} action - The auction action/milestone.
   * @param {Product} product - The product object from the payload.
   * @param {string} [wsChannel]
   * @param {*} [rawPayload]
   */
  function sendAuctionEvent(action, product, wsChannel, rawPayload) {
    if (!product) return;

    /** @type {"" | "sold" | "winning" | "won"} */
    var status = "";
    var statusText = "";
    var bidder = null;

    if (action === "start") {
      status = "winning";
      statusText = "Auction started";
    } else if (action === "end") {
      status = product.bidCount > 0 ? "won" : "";
      statusText = product.bidCount > 0 ? "Auction won" : "Auction ended";
      bidder = (product.highestBid?.user ?? product.purchaserUser)?.username ?? null;
    } else if (action === "sold") {
      status = "sold";
      statusText = "Sold";
      bidder = (product.highestBid?.user ?? product.purchaserUser)?.username ?? null;
    }

    var cents = undefined;
    /** @type {CurrencyCode} */
    var currency = "USD";
    if (product.highestBid && typeof product.highestBid.priceCents === "number") {
      cents = product.highestBid.priceCents;
      if (product.highestBid.price && product.highestBid.price.currency) {
        currency = product.highestBid.price.currency;
      }
    } else if (typeof product.askingPriceCents === "number") {
      cents = product.askingPriceCents;
      if (product.askingPrice && product.askingPrice.currency) {
        currency = product.askingPrice.currency;
      }
    } else if (typeof product.auctionMinimumCents === "number") {
      cents = product.auctionMinimumCents;
      if (product.auctionMinimumPrice && product.auctionMinimumPrice.currency) {
        currency = product.auctionMinimumPrice.currency;
      }
    }

    var priceText = "";
    if (cents !== undefined) {
      priceText = formatMoneyValue({ amount: cents, currency: currency });
    }

    /** @type {User?} */
    var bidderUser = product.highestBid?.user ?? product.purchaserUser ?? null;
    var meta = buildWebSocketMeta(wsChannel || "", "auction_" + action, rawPayload || {}, bidderUser ?? {});
    meta.action = action;
    meta.status = status;
    meta.statusText = statusText;
    meta.price = cents;
    meta.currency = currency;
    meta.priceText = priceText;
    meta.title = product.name || "";
    meta.userId = bidderUser?.id;
    if (product.auctionEndTime) meta.auctionEndTime = product.auctionEndTime;

    if (bidder) {
      meta.bidder = bidder;
    }

    var data = createWebSocketChatData(bidderUser, "");
    data.event = "auction";
    data.meta = meta;
    pushMessage(data);
  }

  /**
   * Sends a live auction bid event.
   * @param {NewBidPayload} payload - The new_bid payload object.
   * @param {string} [wsChannel]
   */
  function sendAuctionBidEvent(payload, wsChannel) {
    if (!payload || !payload.product) return;

    var product = payload.product;
    var highestBidder = payload.highestBidder;
    var bidOvertakenByMaxBid = payload.bidOvertakenByMaxBid;

    // 1. Emit overtaken bid first if present
    if (bidOvertakenByMaxBid && bidOvertakenByMaxBid.user) {
      var overtakenUser = bidOvertakenByMaxBid.user;
      var overtakenPriceCents = bidOvertakenByMaxBid.priceCents || 0;
      var overtakenPriceText = formatMoneyValue(bidOvertakenByMaxBid.price || { amount: overtakenPriceCents, currency: "USD" });

      const data = createWebSocketChatData(overtakenUser, "");
      data.event = "auction";
      data.meta = buildWebSocketMeta(wsChannel || "", "new_bid", payload, overtakenUser);
      data.meta.action = "bid";
      data.meta.successful = false;
      data.meta.reason = "overtaken_by_max_bid";
      data.meta.overtakenBy = highestBidder ? highestBidder.username : "";
      data.meta.price = overtakenPriceCents;
      data.meta.currency = bidOvertakenByMaxBid.price?.currency || "USD";
      data.meta.priceText = overtakenPriceText;
      data.meta.title = product.name || "";
      data.meta.description = product.description;
      data.meta.userId = payload.highestBidder.id;
      if (product.auctionEndTime) data.meta.auctionEndTime = product.auctionEndTime;
      pushMessage(data);
    }

    // 2. Emit successful bid
    if (highestBidder) {
      var bidPriceCents = product.highestBid?.priceCents || (product.highestBid?.price?.amount) || 0;
      var bidPriceText = formatMoneyValue(product.highestBid?.price || { amount: bidPriceCents, currency: "USD" });

      const data = createWebSocketChatData(highestBidder, "");
      data.event = "auction";
      data.meta = buildWebSocketMeta(wsChannel || "", "new_bid", payload, highestBidder);
      data.meta.action = "bid";
      data.meta.successful = true;
      data.meta.price = bidPriceCents;
      data.meta.currency = product.highestBid?.price?.currency || "USD";
      data.meta.priceText = bidPriceText;
      data.meta.title = product.name || "";
      data.meta.description = product.description;
      data.meta.userId = payload.highestBidder.id;
      if (product.auctionEndTime) data.meta.auctionEndTime = product.auctionEndTime;
      pushMessage(data);
    }
  }

  /**
   * Sends a live commerce event.
   * @param {"pin" | "unpin" | "create" | "delete"} action - The commerce action.
   * @param {Product} [product] - The product object from the payload.
   * @param {string} [productId] - The product ID (for delete when product is undefined).
   * @param {string} [wsChannel]
   * @param {*} [rawPayload]
   */
  function sendCommerceEvent(action, product, productId, wsChannel, rawPayload) {
    var pId = productId || (product ? product.id || product.productId : "");
    var title = product ? product.name || "" : "";
    var cents = null;
    /** @type {CurrencyCode} */
    var currency = "USD";

    if (product) {
      if (typeof product.askingPriceCents === "number") {
        cents = product.askingPriceCents;
        if (product.askingPrice && product.askingPrice.currency) {
          currency = product.askingPrice.currency;
        }
      } else if (typeof product.auctionMinimumCents === "number") {
        cents = product.auctionMinimumCents;
        if (product.auctionMinimumPrice && product.auctionMinimumPrice.currency) {
          currency = product.auctionMinimumPrice.currency;
        }
      }

    }

    var priceText = "";
    if (cents !== null) {
      priceText = formatMoneyValue({ amount: cents, currency: currency });
    }

    var meta = buildWebSocketMeta(wsChannel || "", "commerce_" + action, rawPayload || {}, undefined);
    meta.action = action;
    meta.productId = pId;
    meta.title = title;
    meta.description = product?.description;

    if (cents !== null) {
      meta.price = cents;
      meta.currency = currency;
      meta.priceText = priceText;
    }

    if (product) {
      meta.product = product;
    }

    pushMessage({
      type: "whatnot",
      event: "commerce",
      meta: meta
    });
  }

  function registerElectronWebSocketListener() {
    try {
      if (!window.ninjafy?.onWebSocketMessage) {
        console.warn("[Whatnot] Electron register: window.ninjafy.onWebSocketMessage not found");
        return;
      }
      console.log("[Whatnot] Registering Electron WebSocket Listener");
      window.ninjafy.onWebSocketMessage(function (payload) {
        if (payload?.type === "open") console.log("WS Detected", payload.url);
        if (!payload || payload.type !== "message") {
          return;
        }
        handleWhatnotWebSocketFrame(payload.data);
      });
    } catch (e) {
      console.error("[Whatnot] Exception in registerElectronWebSocketListener:", e);
    }
  }

  /**
   * 
   * @param {string} eventName 
   * @param {*} meta 
   * @returns 
   */
  function pushEventWithMeta(eventName, meta) {
    if (!eventName || !meta) return;

    return pushMessage({
      type: "whatnot",
      event: eventName,
      meta: meta
    });
  }

  /**
   * 
   * @param {SourceEventData} data 
   */
  async function pushMessage(data) {
    try {
      await pushCommand({ message: data });
    } catch (e) {
      console.error("[Whatnot] Exception in pushMessage:", e);
    }
  }

  /**
   * Fetches the extension settings
   * @returns {Promise<GetSettingsResponse>} The settings of the extension.
   */
  async function fetchSettings() {
    return await pushCommand({
      getSettings: true,
    });
  }

  class ViewerCountTask extends RecurringTask {
    /** @type {number} */
    _count = 0;
    constructor() {
      super(15, 10);
    }

    /**
     * @param {number} count
     * @returns {boolean}
     */
    setViewerCount(count) {
      if (this._count === count) return false;
      if (!Number.isInteger(count) || count < 0) return false;

      this._count = count;
      this.markStateUpdated();

      return true;
    }

    async executeTask() {
      return await pushEventWithMeta("viewer_update", this._count);
    }
  }

  class AuctionUpdateTask extends RecurringTask {
    constructor() {
      super(15, 10);
      /** @type {Product?} */
      this._product = null;
      /** @type {"winning"|"won"|"sold"?} */
      this._status = null;
      /** @type {string?} */
      this._bidder = null;
      /** @type {LivestreamShippingInfo?} */
      this._shippingInfo = null;
      /** @type {any} */
      this._state = null;
    }

    /**
     * @param {Product} product
     * @param {LivestreamShippingInfo} [shippingInfo]
     */
    pinProduct(product, shippingInfo) {
      if (!product || (product.transactionType !== "AUCTION" && !product.isAuction)) {
        this.clear();
        return;
      }
      this._product = product;
      this._shippingInfo = shippingInfo || null;
      this._status = product.isAuctionActive ? "winning" : null;
      this._bidder = product.highestBid && product.highestBid.user ? product.highestBid.user.username : null;
      this._updateState();
    }

    unpinProduct() {
      this.clear();
    }

    /**
     * @param {User} highestBidder
     * @param {Product} product
     */
    updateBid(highestBidder, product) {
      if (product && (!product.transactionType || product.transactionType === "AUCTION" || product.isAuction)) {
        this._product = product;
        this._status = "winning";
        this._bidder = highestBidder ? highestBidder.username : null;
        this._updateState();
      }
    }

    /**
     * @param {Product} product
     */
    startAuction(product) {
      if (product && (product.transactionType === "AUCTION" || product.isAuction)) {
        this._product = product;
        this._status = "winning";
        this._bidder = product.highestBid && product.highestBid.user ? product.highestBid.user.username : null;
        this._updateState();
      }
    }

    /**
     * @param {Product} product
     */
    endAuction(product) {
      if (this._product && product && this._product.id === product.id) {
        this._product = product;
        this._status = (product.bidCount > 0) ? "won" : null;
        this._bidder = product.highestBid && product.highestBid.user ? product.highestBid.user.username : null;
        this._updateState();
      }
    }

    /**
     * @param {Product} product
     */
    sellProduct(product) {
      if (this._product && product && this._product.id === product.id) {
        this._product = product;
        this._status = "sold";
        this._bidder = product.highestBid && product.highestBid.user ? product.highestBid.user.username : null;
        this._updateState();
      }
    }

    /**
     * @param {Product} product
     */
    updateProduct(product) {
      if (this._product && product && this._product.id === product.id) {
        this._product = product;
        this._updateState();
      }
    }

    clear() {
      this._product = null;
      this._status = null;
      this._bidder = null;
      this._shippingInfo = null;
      if (this._state !== null) {
        this._state = null;
        this.markStateUpdated();
      }
    }

    _updateState() {
      if (!this._product) {
        if (this._state !== null) {
          this._state = null;
          this.markStateUpdated();
        }
        return;
      }

      const product = this._product;
      const status = this._status;
      const bidder = this._bidder;

      const title = product.name || "";
      const description = product.description;
      const category = "";

      let shipping = "";
      if (this._shippingInfo && this._shippingInfo.usDomesticShippingCostSetting) {
        shipping = this._shippingInfo.usDomesticShippingCostSetting;
      }

      let cents = null;
      /** @type {CurrencyCode} */
      let currency = "USD";
      if (product.highestBid && typeof product.highestBid.priceCents === "number") {
        cents = product.highestBid.priceCents;
        if (product.highestBid.price && product.highestBid.price.currency) {
          currency = product.highestBid.price.currency;
        }
      } else if (typeof product.askingPriceCents === "number") {
        cents = product.askingPriceCents;
        if (product.askingPrice && product.askingPrice.currency) {
          currency = product.askingPrice.currency;
        }
      } else if (typeof product.auctionMinimumCents === "number") {
        cents = product.auctionMinimumCents;
        if (product.auctionMinimumPrice && product.auctionMinimumPrice.currency) {
          currency = product.auctionMinimumPrice.currency;
        }
      }

      let price = null;
      let priceText = "";
      if (cents !== null) {
        price = cents * 0.01;
        priceText = formatMoneyValue({ amount: cents, currency: currency });
      }

      const bids = typeof product.bidCount === "number" ? product.bidCount : 0;
      const bidsText = bids === 1 ? "1 Bid" : `${bids} Bids`;

      let statusText = "";
      if (status === "winning") {
        statusText = bidder ? `${bidder} is Winning!` : "Winning!";
      } else if (status === "won") {
        statusText = bidder ? `${bidder} won!` : "Won!";
      } else if (status === "sold") {
        statusText = "Sold";
      }

      let timer = "";
      if (product.auctionEndTime) {
        const endTimeMs = product.auctionEndTime > 1000000000000 ? product.auctionEndTime : product.auctionEndTime * 1000;
        const remainingMs = endTimeMs - Date.now();
        if (remainingMs > 0) {
          const totalSeconds = Math.floor(remainingMs / 1000);
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          timer = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
          timer = "00:00";
        }
      }

      const newState = {
        status,
        statusText,
        bidder,
        title,
        description,
        category,
        shipping,
        bids,
        bidsText,
        price,
        priceText,
        timer
      };

      const serialized = JSON.stringify(newState);
      if (JSON.stringify(this._state) !== serialized) {
        this._state = newState;
        this.markStateUpdated();
      }
    }

    async executeTask() {
      if (!isExtensionOn) {
        return;
      }
      return await pushEventWithMeta("auction_update", this._state);
    }
  }

  const viewerCountTask = new ViewerCountTask();
  const auctionUpdateTask = new AuctionUpdateTask();
  const raidUpdateTask = new RaidUpdateTask();

  function checkAuctionUpdates() {
    auctionUpdateTask.executeTask();
    raidUpdateTask.executeTask();
  }

  fetchSettings().then(function (response) {
    if (!response || typeof response !== "object") return;

    if ("settings" in response) {
      settings = response.settings || {};
    }

    if ("state" in response) {
      isExtensionOn = response.state;
    }

    checkAuctionUpdates();
  });

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    try {
      if (request === "getSource") {
        sendResponse("whatnot");
        return;
      }

      if (request === "focusChat") {
        var input = document.querySelector("[data-testid='chat-input'], .chatInput, textarea");
        if (input) {
          input.focus?.();
          sendResponse(true);
          return;
        }
      }

      if (typeof request === "object" && request) {
        if ("settings" in request) {
          settings = request.settings || {};
          checkAuctionUpdates();
          sendResponse(true);
          return;
        }
        if ("state" in request) {
          isExtensionOn = request.state;
          checkAuctionUpdates();
          sendResponse(true);
          return;
        }
      }
    } catch (e) { }

    sendResponse(false);
  });

  const isElectron = window.ninjafy !== undefined || !!(typeof process !== "undefined" && process.versions?.electron);
  if (isElectron) {
    console.log("Electron environment detected, registering Ninjafy WS listener");
    registerElectronWebSocketListener();
  } else {
    console.log("Registering window message listener for WS data as fallback");
    window.addEventListener("message", function (/** @type {MessageEvent<WSEvent>} */ payload) {
      if (payload?.data?.type === "open") {
        console.log("WS Connection Opened", payload.data.url);
      }
      if (payload?.data?.type !== "message") return;

      handleWhatnotWebSocketFrame(payload.data);
    });
  }

  console.log("new social stream injected");
})();
