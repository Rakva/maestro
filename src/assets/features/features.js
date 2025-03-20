import maestro_home from "../../assets/maestro/maestro_home.png";
import maestro_2 from "../../assets/maestro/maestro_2.png";
import maestro_4 from "../../assets/maestro/maestro_4.png";
import maestro_warnings from "../../assets/maestro/maestro_warnings.png";
import maestro_warnings_on_screen from "../../assets/maestro/maestro_warnings_on_Screen.png";
import text from "../lang/text";

function Features_Func(lang){

    const features = [
        {
            title: text.maestroPlus.dynAccGra[`${lang}`],
            list:  [
                {
                    text: text.maestroPlus.creRes[`${lang}`],
                    src: maestro_2
                },
                {
                    text: text.maestroPlus.menRes[`${lang}`],
                    src: maestro_home
                },
                {
                    text: text.maestroPlus.resMod[`${lang}`],
                    src: maestro_4
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
                    src: ""
                },
                {
                    text: text.maestroPlus.autmode[`${lang}`],
                    src: ""
                },
                {
                    text: text.maestroPlus.lauana[`${lang}`],
                    src: ""
                }
            ]
        }
    ];

    return features;
}


export default Features_Func;