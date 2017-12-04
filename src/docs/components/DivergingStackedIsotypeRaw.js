import React from "react"
import { answers } from "../sampledata/questions"
import { ORFrame } from "../../components"
import cow from "material-design-icons-svg/paths/cow"
import cat from "material-design-icons-svg/paths/cat"
import cake from "material-design-icons-svg/paths/cake"
import cannabis from "material-design-icons-svg/paths/cannabis"

const capitalist =
  "m 21.837511,0.44118311 c -0.51117,0.0352 -1.09141,0.15331 -2.02734,0.37304 -3.84216,0.90202999 -4.07335,1.14498999 -3.52539,3.71484999 0.22079,1.03546 0.47651,2.44692 0.57031,3.13672 0.0939,0.68978 0.24604,1.6250104 0.33594,2.0781204 0.10228,0.5153405 0.0596,1.0168705 -0.11328,1.3398405 -0.24675,0.46107 -0.39593,0.50304 -1.39453,0.38477 -0.9945,-0.11779 -1.15674,-0.0737 -1.46485,0.39648 -0.66862,1.02045 0.58549,2.64095 2.40235,3.10547 1.84721,0.47228 2.36643,0.48744 4.60937,0.125 1.75921,-0.28427 2.46354,-0.30686 3.41992,-0.10547 1.82194,0.45654 3.09375,0.45118 3.09375,0.45118 0.54089,-0.0126 1.22274,0.13763 1.52539,0.33593 0.99898,0.65456 1.69397,-0.0612 1.75977,-1.8125 0.037,-0.98454 -0.55032,-1.71507 -1.85352,-2.30273 -0.48036,-0.21662 -0.98712,-0.64428 -1.12695,-0.951171 -0.30184,-0.662369 -0.31756,-2.6113899 -0.043,-5.4472699 0.1097,-1.13334 0.14357,-2.34873 0.0762,-2.70117 -0.14249,-0.74537 -1.15376,-1.44889 -2.33984,-1.62694999 -0.43896,-0.0659 -1.47314,-0.23464 -2.29687,-0.37305 -0.65549,-0.11014 -1.09625,-0.1563 -1.60743,-0.12109 z m 1.34571,16.13281089 c -0.51566,0.0157 -1.13016,0.0922 -2.00977,0.23437 -2.24294,0.36244 -2.76412,0.34728 -4.61133,-0.125 -0.0931,-0.0238 -0.1776,-0.0621 -0.26757,-0.0918 -0.53488,1.9024 -0.30325,4.42257 1.18554,7.57422 0.43841,1.70424 1.59728,3.20816 -6.38867,3.21874 -6.07726,0.008 -6.46881,0.0367 -7.27539,0.53516 -1.02481,0.63337 -3.59982001,1.5817 -3.60742001,3.13672 l -0.21289,43.83789 7.03906001,-0.0684 c 0,0 0.18467,1.20578 0.1543,5.64063 -0.0201,2.93146 0.0346,13.35498 0.12109,23.162116 0.20103,22.7985 0.19369,24.47113 -0.12891,25.30078 -0.19178,0.49323 -0.77773,0.9453 -2.06054,1.59375 -1.89141,0.9561 -3.17188,1.98146 -3.17188,2.54101 5.23935,2.25459 12.78966,0.82104 18.84766,0.69531 0.47951,-0.24793 0.74269,-0.58183 0.74609,-0.94335 0.003,-0.30724 0.0487,-10.70403 0.10156,-23.10547 0.0735,-17.239176 0.1684,-22.636076 0.40235,-22.917976 0.3877,-0.46716 1.34914,-0.47702 1.73047,-0.0176 0.21734,0.26188 0.28363,6.23017 0.25781,23.419926 l -0.0352,23.06836 0.58985,0.31836 c 6.29872,1.03365 12.30782,0.61233 18.21093,-0.33203 0.26827,-0.69908 -0.8347,-1.61895 -3.80664,-3.17578 -1.2558,-0.65784 -2.13334,-1.85013 -2.14843,-2.91992 -0.0141,-0.99532 -0.003,-46.218746 0.0117,-49.806646 0.006,-1.44101 0.063,-2.31005 0.27539,-2.48633 l 6.87109,-0.0137 0.16797,-45.33204 c -0.73658,-0.79021 -2.37992,-2.29389 -4.06836,-2.27539 l -6.66211,0.0723 c -5.68554,0.0624 -6.42056,-0.0924 -6.81055,-0.48242 -0.35698,-0.35698 -0.38186,-0.51806 -0.13086,-0.87305 2.21687,-3.53641 2.82364,-6.39206 2.47657,-8.57812 -0.34645,-0.13866 -0.8579,-0.23269 -1.28907,-0.22266 0,0 -1.27181,0.003 -3.09375,-0.45313 -0.47819,-0.10069 -0.89449,-0.14464 -1.41015,-0.1289 z m -2.85352,18.58008 c 0.42326,-0.009 0.93455,0.0102 1.55274,0.0508 2.55684,0.16795 2.79812,0.36837 2.36328,1.95508 -0.33526,1.22335 -0.31725,2.15655 0.0488,2.59765 0.32603,0.39285 2.32436,1.44922 2.74218,1.44922 0.1527,0 0.72491,0.21587 1.27149,0.48047 1.15696,0.56008 2.33831,2.35817 2.34179,3.56641 0.002,0.68797 -0.0538,0.74218 -0.75781,0.74218 -0.51407,0 -0.92992,0.18387 -1.29297,0.57032 -0.31925,0.33982 -0.7886,0.57031 -1.16211,0.57031 -0.44413,0 -0.84686,0.255 -1.38476,0.8789 -0.41738,0.48411 -1.11964,1.06393 -1.5586,1.28711 -1.01741,0.51729 -1.13246,0.70432 -1.13671,1.86133 -0.003,0.83493 0.091,1.00885 0.76562,1.42578 0.4224,0.26106 0.89117,0.47461 1.04297,0.47461 0.1518,0 0.68301,-0.41045 1.17969,-0.91211 0.49667,-0.50167 1.07454,-0.91211 1.2832,-0.91211 0.20866,0 0.69284,-0.30425 1.07617,-0.67578 0.62755,-0.60825 0.75218,-0.64636 1.26367,-0.39062 0.53525,0.26762 0.57077,0.39563 0.5918,2.21484 0.0258,2.23451 0.15166,2.76802 1.55469,6.56641 1.21015,3.27622 1.42346,5.02211 0.69531,5.70703 -0.24645,0.23181 -1.42378,0.73461 -2.61523,1.11719 -1.86741,0.59965 -2.60546,0.71191 -5.35743,0.80468 -1.75583,0.0592 -4.52779,0.0381 -6.1582,-0.0449 -1.6304,-0.0831 -3.16909,-0.26249 -3.41992,-0.39844 -0.25083,-0.13595 -0.86748,-0.3204 -1.36914,-0.41015 -1.14774,-0.20533 -3.03486,-1.21554 -3.3418,-1.78906 -0.28783,-0.53782 -0.0679,-1.79756 0.51367,-2.9375 0.741,-1.45249 1.09661,-3.56473 1.22071,-7.25586 0.15815,-4.70363 0.28389,-5.71427 0.97851,-7.86719 0.48652,-1.50796 0.82828,-2.0963 1.97656,-3.39258 0.76401,-0.86248 1.9275,-1.87185 2.58594,-2.24414 1.36131,-0.76971 1.45567,-1.09803 0.73633,-2.58398 -0.36349,-0.75088 -0.41322,-1.08304 -0.23242,-1.5586 0.24807,-0.65247 0.73217,-0.92174 2.00195,-0.94726 z m 0.73242,17.25 c -0.39619,0.0529 -0.73426,0.34821 -1.01172,0.88476 -0.17757,0.34339 -0.64745,0.75805 -1.04296,0.92188 -0.50457,0.20899 -0.8453,0.59163 -1.14258,1.28515 -0.31689,0.73928 -0.54941,0.98828 -0.92578,0.98828 -0.27677,0 -0.68003,0.15941 -0.89453,0.35352 -0.32947,0.29817 -0.35233,0.50103 -0.1543,1.31055 0.12892,0.52703 0.33462,1.08737 0.45703,1.24414 0.33028,0.42299 1.01071,0.34434 1.36133,-0.15625 0.49746,-0.71022 2.97533,-2.43595 3.94922,-2.75 1.30574,-0.42107 1.46875,-0.62342 1.46875,-1.83399 0,-0.93939 -0.0976,-1.17378 -0.70118,-1.68164 -0.51225,-0.43103 -0.96708,-0.61934 -1.36328,-0.5664 z m -7.05078,7.86132 c -0.0453,-0.004 -0.0909,0.003 -0.13476,0.0195 -0.24509,0.0941 -0.26246,0.22838 -0.0742,0.58007 0.28458,0.53174 0.75295,0.23478 0.5332,-0.33789 -0.0579,-0.15088 -0.18844,-0.24989 -0.32422,-0.26172 z M 0.23595099,76.396254 c -0.49334,0.75293 -0.15472,2.24806 0.89453001,4.13477 0,0 2.94538,3.30103 4.33399,2.61719 l -0.0117,-6.71875 -5.21680001,-0.0332 z m 43.36914001,0 -5.21679,0.0332 -0.0117,6.71875 c 1.38861,0.68384 4.33203,-2.61719 4.33203,-2.61719 1.04925,-1.88671 1.38982,-3.38184 0.89648,-4.13477 z"

const artisan =
  "m 25.521442,0.44144895 c -0.56533,-0.0164 -1.25864,-0.003 -2.18946,0.0137 -5.03872,0.0885 -8.8767,1.00609995 -10.52539,2.51757995 -0.36867,0.33799 -0.91549,1.26984 -1.21484,2.07031 -0.57329,1.53295 -0.50872,1.97407 0.44922,3.07227 0.52923,0.60672 0.62761,0.57462 1.64258,-0.54883 0.49159,-0.54413 1.15588,-1.15397 1.47461,-1.35351 0.52174,-0.32664 4.49574,-0.76068 6.98242,-0.76368 4.80384,-0.006 7.72934,0.54288 8.99023,1.6875 0.45299,0.41122 0.66735,0.46282 1.00391,0.2461 1.17818,-0.75865 -0.18412,-4.1858 -2.09766,-5.27539 -2.28305,-1.30001995 -2.81964,-1.61665995 -4.51562,-1.66601995 z m 3.6914,8.22851995 c -0.28848,0.0539 -0.79939,0.28233 -1.30664,0.59765 -2.31381,1.4383501 -3.41924,1.7988301 -5.51367,1.7988301 -2.03048,0 -3.83494,-0.55895 -4.89648,-1.5175801 -0.63211,-0.57088 -1.64881,-0.81912 -2.11524,-0.51562 -0.19634,0.12775 -0.35421,0.60965 -0.34961,1.0703101 0.0107,1.07155 0.50373,4.76827 0.83203,6.23633 0.13901,0.62157 0.3491,1.64014 0.46485,2.26172 0.11574,0.62158 0.56601,1.87394 1.00195,2.78515 1.5466,3.23279 1.59727,3.20815 -6.38867,3.21875 -6.0772601,0.008 -6.4707701,0.0367 -7.2773501,0.53516 -1.02481,0.63337 -3.59747001,1.5817 -3.60547001,3.13672 l -0.21484,43.83984 7.04102001,-0.0684 c 0,0 0.18469,1.20578 0.15429,5.64063 -0.0201,2.93146 0.0346,13.35302 0.1211,23.160151 0.20104,22.7985 0.19174,24.47111 -0.13086,25.30079 -0.19178,0.49322 -0.77579,0.94529 -2.0586,1.59374 -1.89141,0.95611 -3.17187,1.98342 -3.17187,2.54297 5.23935,2.25459 12.7896601,0.81907 18.8476601,0.69336 0.47951,-0.24796 0.74269,-0.57988 0.74609,-0.9414 0.003,-0.30724 0.0487,-10.70597 0.10156,-23.10743 0.0735,-17.239171 0.16839,-22.634111 0.40235,-22.916011 0.3877,-0.46716 1.34914,-0.47704 1.73047,-0.0176 0.21734,0.26188 0.28363,6.23017 0.25781,23.419921 l -0.0352,23.06641 0.58985,0.32031 c 6.29872,1.03365 12.30586,0.61233 18.20898,-0.33203 0.26827,-0.69908 -0.83276,-1.61895 -3.80469,-3.17578 -1.2558,-0.65784 -2.13335,-1.85209 -2.14844,-2.92188 -0.0141,-0.99532 -0.005,-46.216781 0.01,-49.804681 0.006,-1.44101 0.0649,-2.312 0.27734,-2.48828 l 6.8711,-0.0117 0.16797,-45.33203 c -0.73658,-0.79021 -2.37992,-2.29585 -4.06836,-2.27735 l -6.66211,0.0742 c -5.68555,0.0624 -6.42056,-0.0944 -6.81055,-0.48437 -0.35698,-0.35698 -0.38187,-0.51611 -0.13086,-0.8711 0.79655,-1.12653 1.70207,-3.14759 2.33203,-5.20703 0.54316,-1.77566 0.72656,-2.99633 0.85547,-5.69141 0.11612,-2.4276497 0.0805,-3.4801601 -0.11914,-3.6035101 -0.0388,-0.024 -0.10892,-0.0258 -0.20508,-0.008 z M 11.031202,36.781289 c 0.80459,0.55506 1.61921,1.09202 2.32227,1.78125 0.78047,0.82143 1.49738,1.71177 2.41797,2.40235 0.8413,0.98973 1.70334,1.94904 2.63476,2.85351 0.92134,0.96694 1.78568,1.98372 2.73633,2.91407 0.8313,1.0596 1.52976,2.24744 2.62891,3.0664 1.39192,1.32985 2.52778,2.90246 3.90234,4.24805 0.71524,1.08433 1.71584,1.90443 2.51172,2.90234 0.78251,1.08842 1.80756,1.97111 2.74023,2.91407 0.50774,0.73276 -0.0529,1.89711 -1.00976,1.55273 -1.08067,-0.45624 -1.60412,-1.65026 -2.54297,-2.32031 -1.82157,-1.8068 -3.45429,-3.79707 -5.24609,-5.63672 -0.72186,-0.90365 -1.46733,-1.7563 -2.37696,-2.47656 -0.67709,-0.99777 -1.4467,-1.92588 -2.30078,-2.78516 -1.59839,-1.62112 -3.1976,-3.25875 -4.55078,-5.09375 -0.62601,-0.96276 -0.48615,-2.37028 -1.50586,-3.07617 -1.17967,-0.13393 -2.03854,-0.91463 -2.6875,-1.84571 -0.31182,-0.48813 -0.35829,-1.28349 0.32617,-1.40039 z m 6.87305,17.97266 c 0.50157,0.0138 1.00643,0.0636 1.50195,0.0449 0.34685,0.0201 0.71118,-0.0339 1.05078,0.002 0.312,0.18753 0.63776,0.38453 0.77735,0.74218 0.19227,0.42019 0.62126,0.62958 1.0625,0.67383 0.61865,0.13393 1.3359,-0.0825 1.8789,0.30469 0.40498,0.67439 0.38945,1.4954 0.50196,2.25195 0.0936,0.7401 -0.0463,1.55157 -0.54688,2.12305 -0.67116,0.3663 -1.46282,0.33248 -2.20312,0.40234 -0.89589,0.0262 -1.79189,-0.0146 -2.6875,-0.0332 -2.31704,-0.0506 -4.63568,-0.0534 -6.95313,-0.0684 -0.29958,-0.18661 -0.67911,-0.32892 -0.75586,-0.71875 -0.30831,-0.75836 -0.19132,-1.59817 -0.21289,-2.39648 -0.0212,-0.55173 0.12483,-1.24347 0.76563,-1.36524 0.87918,-0.22508 1.85882,-0.0565 2.67578,-0.52734 0.57053,-0.40194 0.95346,-1.087 1.66601,-1.26172 0.48021,-0.16609 0.97695,-0.18764 1.47852,-0.17383 z M 0.08393189,73.619179 c -0.49334,0.75293 -0.15276,2.24806 0.89649,4.13477 0,0 2.94537001,3.30103 4.33398001,2.61719 l -0.0117,-6.7207 -5.21876001,-0.0313 z m 43.37110011,0 -5.21875,0.0313 -0.01,6.7207 c 1.3893,0.68037 4.33204,-2.61719 4.33204,-2.61719 1.04925,-1.88671 1.38982,-3.38184 0.89648,-4.13477 z"

const worker =
  "m 25.913016,0.39524895 c -0.56533,-0.0165 -1.25864,-0.005 -2.18946,0.0117 -5.03872,0.0885 -8.8767,1.00804995 -10.52539,2.51952995 -0.36867,0.33799 -0.91353,1.26789 -1.21289,2.06836 -0.57328,1.53295 -0.50871,1.97602 0.44922,3.07422 0.52923,0.60671 0.62761,0.57266 1.64258,-0.55079 0.49159,-0.54413 1.15393,-1.15202 1.47265,-1.35156 0.52175,-0.32663 4.4977,-0.76262 6.98438,-0.76562 4.80384,-0.006 7.72934,0.54288 8.99023,1.6875 0.453,0.41122 0.66736,0.46476 1.00391,0.24804 1.17818,-0.75865 -0.18607,-4.1858 -2.09961,-5.27539 -2.28305,-1.30000995 -2.81964,-1.61665995 -4.51562,-1.66600995 z m 3.6914,8.22850995 c -0.28848,0.054 -0.79744,0.28038 -1.30469,0.59571 -2.31381,1.4383501 -3.42119,1.8007801 -5.51562,1.8007801 -2.03048,0 -3.83494,-0.5609 -4.89648,-1.5195301 -0.63211,-0.57088 -1.64881,-0.81718 -2.11524,-0.51368 -0.19634,0.12775 -0.35226,0.60966 -0.34766,1.0703201 0.0107,1.07155 0.50373,4.76826 0.83204,6.23632 0.139,0.62157 0.34714,1.63819 0.46289,2.25977 0.11574,0.62158 0.56796,1.8759 1.0039,2.78711 1.5466,3.23279 1.59532,3.20815 -6.39062,3.21875 -6.0772596,0.008 -6.4688096,0.0367 -7.2753896,0.53516 -1.02482,0.63337 -3.59982001,1.58169 -3.60742001,3.13671 l -0.2129,43.8379 7.03907001,-0.0684 c 0,0 0.18662,1.20577 0.15625,5.64062 -0.0201,2.93146 0.0346,13.35498 0.12109,23.162111 0.20103,22.7985 0.19174,24.47113 -0.13086,25.30078 -0.19178,0.49323 -0.77578,0.9453 -2.05859,1.59375 -1.89141,0.9561 -3.17383,1.98342 -3.17383,2.54297 5.23935,2.25459 12.7916096,0.81907 18.8496096,0.69336 0.47951,-0.24796 0.74269,-0.57989 0.74609,-0.94141 0.003,-0.30724 0.0487,-10.70598 0.10157,-23.10742 0.0735,-17.239171 0.16839,-22.634111 0.40234,-22.916011 0.3877,-0.46716 1.34914,-0.47704 1.73047,-0.0176 0.21734,0.26188 0.28168,6.22822 0.25586,23.417971 l -0.0352,23.06836 0.5918,0.31836 c 6.29872,1.03365 12.30586,0.61232 18.20898,-0.33204 0.26827,-0.69908 -0.83276,-1.61699 -3.80469,-3.17382 -1.2558,-0.65784 -2.1353,-1.85209 -2.15039,-2.92188 -0.0141,-0.99532 -0.003,-46.216791 0.0117,-49.804691 0.006,-1.44101 0.063,-2.312 0.27539,-2.48828 l 6.8711,-0.0137 0.16992,-45.33008 c -0.73658,-0.79021 -2.38187,-2.29584 -4.07031,-2.27734 l -6.66016,0.0723 c -5.68554,0.0624 -6.42251,-0.0924 -6.8125,-0.48242 -0.35698,-0.35698 -0.37991,-0.5161 -0.12891,-0.87109 0.79656,-1.12653 1.70012,-3.14759 2.33008,-5.20703 0.54316,-1.77566 0.72656,-2.99633 0.85547,-5.69141 0.11612,-2.4276497 0.0824,-3.4821201 -0.11719,-3.6054701 -0.0388,-0.024 -0.11087,-0.0238 -0.20703,-0.006 z m -7.79687,24.9375001 c 1.11034,-0.0147 2.37042,0.0983 3.32617,0.34571 0.86803,0.2247 0.9557,0.32134 0.85156,0.92578 -0.0639,0.37067 -0.19814,0.86489 -0.29883,1.09961 -0.13214,0.30803 0.14804,0.782 1.00782,1.70117 1.49752,1.60097 2.10777,1.77792 3.13671,0.91211 0.42746,-0.35967 1.02403,-0.65049 1.32422,-0.64649 0.93951,0.0134 3.16373,3.49095 3.17774,4.96875 0.008,0.85477 -0.44696,1.55469 -1.00977,1.55469 -1.0058,0 -1.49804,0.87072 -1.49804,2.65234 0,1.93799 0.21817,2.4427 1.23828,2.86524 1.21462,0.50311 1.19628,1.06767 -0.10547,3.15625 -0.64275,1.03125 -1.37972,1.98746 -1.63672,2.125 -0.79244,0.4241 -1.77432,0.27969 -2.55469,-0.37695 -0.88417,-0.74399 -1.25718,-0.76726 -2.5918,-0.16016 -1.47987,0.67318 -1.72479,1.07723 -1.5332,2.52148 0.16012,1.20704 0.14986,1.23107 -0.63281,1.50391 -1.40796,0.49082 -5.46014,0.21105 -5.93359,-0.41016 -0.17298,-0.22696 -0.3125,-1.11021 -0.3125,-1.96679 0,-1.47583 -0.0447,-1.58856 -0.86329,-2.21289 -1.04578,-0.79766 -1.93384,-0.83192 -3.08398,-0.1211 -0.86439,0.53427 -0.86924,0.53505 -1.53711,0.043 -1.3952,-1.02797 -2.9597796,-4.93367 -2.2968696,-5.73242 0.1695196,-0.20427 0.5253896,-0.37109 0.7910096,-0.37109 0.26562,0 0.76057,-0.27815 1.09961,-0.61719 1.15541,-1.15541 0.68229,-3.9043 -0.67187,-3.9043 -0.53405,0 -0.97266,-0.5187 -0.97266,-1.15039 0,-0.85227 1.23981,-3.40844 2.0918,-4.3125 0.88826,-0.94255 1.64826,-1.03598 2.32421,-0.28906 0.97142,1.07342 1.25002,1.06862 3.1211,-0.043 1.86133,-1.10579 2.13371,-1.62782 1.4414,-2.76172 -0.26712,-0.43752 -0.24099,-0.56942 0.17383,-0.87695 0.35721,-0.26483 1.31739,-0.40716 2.42774,-0.42188 z m 0.72851,8.34766 a 4.3993945,4.3993945 0 0 0 -4.39843,4.40039 4.3993945,4.3993945 0 0 0 4.39843,4.39844 4.3993945,4.3993945 0 0 0 4.40039,-4.39844 4.3993945,4.3993945 0 0 0 -4.40039,-4.40039 z M 0.47746639,73.572979 c -0.49334,0.75293 -0.15277,2.24806 0.89648001,4.13477 0,0 2.94342,3.30102 4.33203,2.61718 l -0.0117,-6.7207 -5.21680001,-0.0312 z m 43.36913961,0 -5.2168,0.0312 -0.0117,6.7207 c 1.38861,0.68384 4.33399,-2.61718 4.33399,-2.61718 1.04925,-1.88671 1.38787,-3.38184 0.89453,-4.13477 z"

const peasant =
  "m 25.867116,0.44733221 c -0.56532,-0.0165 -1.25863,-0.003 -2.18945,0.0137 -5.03872,0.0885 -8.8767,1.00608999 -10.52539,2.51756999 -0.36867,0.33799 -0.91549,1.26985 -1.21484,2.07032 -0.57329,1.53295 -0.50872,1.97406 0.44922,3.07226 0.52923,0.60672 0.62956,0.57462 1.64453,-0.54883 0.49159,-0.54413 1.15393,-1.15202 1.47265,-1.35156 0.52175,-0.32663 4.49575,-0.76262 6.98242,-0.76562 4.80384,-0.006 7.72935,0.54288 8.99024,1.6875 0.45299,0.41122 0.6693,0.46476 1.00586,0.24804 1.17818,-0.75865 -0.18607,-4.18775 -2.09961,-5.27734 -2.28305,-1.30000999 -2.81965,-1.61665999 -4.51563,-1.66601999 z m 3.69141,8.22851999 c -0.28848,0.0539 -0.79939,0.28233 -1.30664,0.59766 -2.31381,1.4383498 -3.41924,1.7988208 -5.51367,1.7988208 -2.03049,0 -3.83494,-0.558941 -4.89649,-1.5175708 -0.63211,-0.57088 -1.64881,-0.81913 -2.11523,-0.51563 -0.19634,0.12775 -0.35421,0.60965 -0.34961,1.0703098 0.0107,1.071551 0.50568,4.770221 0.83398,6.238281 0.13901,0.62157 0.34715,1.63819 0.46289,2.25977 0.11575,0.62158 0.56602,1.8759 1.00196,2.78711 1.54659,3.23279 1.59727,3.2062 -6.38867,3.2168 -6.0772603,0.008 -6.4688103,0.0386 -7.2753903,0.53711 -1.02482,0.63337 -3.59982998,1.57974 -3.60742998,3.13476 l -0.21289,43.83985 7.03906998,-0.0684 c 0,0 0.18466,1.20577 0.15429,5.64062 -0.0201,2.93146 0.0346,13.35498 0.1211,23.162107 0.20103,22.7985 0.19369,24.46918 -0.12891,25.29883 -0.19179,0.49323 -0.77774,0.94725 -2.06055,1.5957 -1.89141,0.9561 -3.17187,1.98147 -3.17187,2.54102 5.23935,2.25459 12.7896503,0.81907 18.8476503,0.69336 0.47951,-0.24796 0.7427,-0.57989 0.7461,-0.94141 0.003,-0.30724 0.0487,-10.70403 0.10156,-23.10547 0.0735,-17.239167 0.16839,-22.636067 0.40234,-22.917967 0.3877,-0.46716 1.34915,-0.47704 1.73047,-0.0176 0.21734,0.26188 0.28364,6.23018 0.25782,23.419927 l -0.0352,23.06836 0.58984,0.31836 c 6.29872,1.03365 12.30586,0.61232 18.20898,-0.33204 0.26827,-0.69908 -0.83275,-1.61895 -3.80468,-3.17578 -1.2558,-0.65784 -2.13335,-1.85208 -2.14844,-2.92187 -0.0141,-0.99532 -0.003,-46.216787 0.0117,-49.804687 0.006,-1.44101 0.063,-2.312 0.27539,-2.48828 l 6.87109,-0.0117 0.16797,-45.33203 c -0.73658,-0.79021 -2.37992,-2.29583 -4.06836,-2.27735 l -6.66211,0.0742 c -5.68554,0.0624 -6.42056,-0.0924 -6.81054,-0.48242 -0.35699,-0.35698 -0.38187,-0.51806 -0.13086,-0.87304 0.79655,-1.12654 1.70207,-3.1476 2.33203,-5.20704 0.54316,-1.77566 0.72656,-2.99437 0.85547,-5.68945 0.11611,-2.4276508 0.0824,-3.4821208 -0.11719,-3.6054708 -0.0388,-0.024 -0.11087,-0.0258 -0.20703,-0.008 z m -7.17969,23.7441408 c 16.00735,0.85371 17.48018,30.95407 -5.22265,20.76367 l -4.07813,3.3125 c -2.70067,0.13686 -2.87043,-1.13252 -2.54687,-2.67578 l 6.75195,-5.0957 c 7.73792,10.18868 22.44289,-4.67982 5.0957,-16.30469 z M 0.43157572,73.625073 c -0.49334,0.75293 -0.15472,2.24805 0.89452998,4.13476 0,0 2.94537,3.30103 4.33398,2.61719 l -0.0117,-6.71875 -5.21678998,-0.0332 z m 43.36914028,0 -5.2168,0.0332 -0.0117,6.71875 c 1.38861,0.68384 4.33203,-2.61719 4.33203,-2.61719 1.04925,-1.88671 1.38983,-3.38183 0.89649,-4.13476 z"

const iconHash = {
  disagree: cow,
  stronglydisagree: cat,
  agree: cake,
  stronglyagree: cannabis
}

export default (
  <ORFrame
    size={[700, 300]}
    data={answers}
    type={{
      type: "bar",
      icon: d => iconHash[d.type],
      iconPadding: 0,
      resize: "fixed"
    }}
    projection="horizontal"
    oAccessor={"question"}
    rAccessor={"percent"}
    style={(d, i) => ({
      fill: d.color,
      stroke: "black",
      strokeWidth: 0.5
    })}
    margin={{ top: 30, bottom: 0, left: 10, right: 80 }}
    oPadding={4}
    oLabel={{ orient: "right" }}
    axis={{
      orient: "top",
      tickValues: [-0.3, -0.15, 0, 0.2, 0.4, 0.6, 0.8, 1]
    }}
  />
)
