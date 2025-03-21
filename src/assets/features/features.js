import maestro_home from "../../assets/maestro/maestro_home.png";
import maestro_3 from "../../assets/maestro/maestro_3.png";
import maestro_warnings from "../../assets/maestro/maestro_warnings.png";
import manual from "../../assets/maestro/manual.png";
import automatic from "../../assets/maestro/automatic.png";
import nodes from "../../assets/maestro/nodes.png";
import maestro_warnings_on_screen from "../../assets/maestro/maestro_warnings_on_Screen.png";
import text from "../lang/text";

function Features_Func(lang){

    const features = [
        {
            title: text.maestroPlus.dynAccGra[`${lang}`],
            list:  [
                {
                    text: text.maestroPlus.creRes[`${lang}`],
                    src: maestro_3
                },
                {
                    text: text.maestroPlus.menRes[`${lang}`],
                    src: maestro_home
                }
            ]
        },
        {
            title: text.maestroPlus.secAna[`${lang}`],
            list: [
                {
                    text: text.maestroPlus.autSca[`${lang}`],
                    src: ""
                },
                {
                    text: text.maestroPlus.disWar[`${lang}`],
                    src: maestro_warnings_on_screen
                },
                {
                    text: text.maestroPlus.wasDef[`${lang}`],
                    src: maestro_warnings
                }
            ],
        },
        {
            title: text.maestroPlus.modAtt[`${lang}`],
            list: [
                {
                    text: text.maestroPlus.manmod[`${lang}`],
                    src: manual
                },
                {
                    text: text.maestroPlus.autmode[`${lang}`],
                    src: automatic
                }
            ]
        }
    ];

    return features;
}


export default Features_Func;