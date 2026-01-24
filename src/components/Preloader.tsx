'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

// Unified animation for all logo parts: Draw Stroke -> Then Fill
const logoAnimation: Variants = {
    hidden: {
        pathLength: 0,
        opacity: 0,
        fillOpacity: 0
    },
    visible: {
        pathLength: 1,
        opacity: 1,
        fillOpacity: 1,
        transition: {
            pathLength: { duration: 2, ease: "easeInOut" }, // Draw the outline
            opacity: { duration: 0.5 },
            fillOpacity: { duration: 1, delay: 2 } // Fade in the fill AFTER drawing
        }
    }
};

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        // 3.5 seconds total load time
        const timer = setTimeout(() => {
            setExit(true);
            setTimeout(onComplete, 800);
        }, 3500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-0 overflow-hidden"
            initial={{ opacity: 1 }}
            animate={exit ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-center">
                <motion.div
                    className="w-full h-full"
                    // Double shadow initial state (0 blur, 0 opacity) for smooth interpolation
                    initial={{ scale: 0.9, filter: 'drop-shadow(0 0 0px rgba(0, 224, 143, 0)) drop-shadow(0 0 0px rgba(0, 224, 143, 0))' }}
                    animate={{
                        scale: 1.15,
                        // Double shadow: Tight intense core + Wide atmospheric glow
                        filter: 'drop-shadow(0 0 10px rgba(0, 224, 143, 0.9)) drop-shadow(0 0 35px rgba(0, 224, 143, 0.5))'
                    }}
                    transition={{ duration: 4, ease: "linear" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1920 1080"
                        className="w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <style>
                                {`
                                .cls-1 { fill: #0a0a0a; }
                                .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 { stroke: #fff; stroke-miterlimit: 10; }
                                .cls-2, .cls-3, .cls-5 { fill: #fff; }
                                .cls-3, .cls-4 { stroke-width: 6px; }
                                .cls-4, .cls-6 { fill: none; }
                                .cls-5, .cls-6 { stroke-width: 9px; }
                                .cls-7 { fill: #00E08F; }
                            `}
                            </style>
                        </defs>

                        <motion.g
                            initial="hidden"
                            animate="visible"
                            className="origin-center"
                        >
                            {/* Z GREEN */}
                            <g id="Z_GREEN" data-name="Z GREEN">
                                <motion.polyline variants={logoAnimation} className="cls-7" points="368.21 367.4 620.97 367.4 620.97 408.41 467.63 566.23 641.51 565.4 592.06 618.15 369.2 620.4 369.2 573.4 518.11 418.4 411.21 418.4 368.21 367.4" />
                            </g>

                            {/* Z WHITE */}
                            <g id="Z_WHITE" data-name="Z WHITE">
                                <motion.polyline variants={logoAnimation} className="cls-4" points="467.63 566.23 641.51 565.4 592.06 618.15 445.16 620.27 431.16 605.4 431.16 577.4 575.57 437.42 574.62 413.39" />
                                <motion.path variants={logoAnimation} className="cls-4" d="M484.95,580.02l74.14-.62-74.14.62Z" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="464.14 620.27 464.83 592.51 578.57 592.38 590.06 580.9 590.45 565.49" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="445.16 620.27 369.2 620.4 369.2 573.4 518.11 418.4 411.21 418.4 368.21 367.4 620.97 367.4 620.97 408.41 447.65 585.98 447.65 599.51" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="551.15 385.4 551.15 437.9 415.87 571.39 415.87 620.27" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="388.19 620.91 400.17 600.4 400.17 565.49 530.1 435.41" />
                                <motion.line variants={logoAnimation} className="cls-6" x1="383.8" y1="558.21" x2="383.8" y2="593.39" />
                                <motion.polyline variants={logoAnimation} className="cls-6" points="588.06 368.4 588.06 393.4 598.56 406.07 598.56 428.82" />
                                <motion.line variants={logoAnimation} className="cls-6" x1="606.05" y1="368.4" x2="606.05" y2="386.74" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="388.19 367.4 406.75 388.31 495.12 388.31 517.11 367.4" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="400.17 405.4 528.1 405.4 535.1 396.4 535.1 368.4" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="622.96" y1="566.23" x2="622.96" y2="585.4" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="606.05 565.49 606.05 583.91 587.31 605.9 517.15 605.9" />
                                <motion.line variants={logoAnimation} className="cls-6" x1="484.95" y1="592.88" x2="484.95" y2="620.4" />
                                <motion.circle variants={logoAnimation} className="cls-5" cx="551.03" cy="383.35" r="4.94" />
                                <motion.circle variants={logoAnimation} className="cls-5" cx="574.43" cy="412.4" r="6" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="606.05" cy="388.9" r="4" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="483.51" cy="578.9" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="559.08" cy="578.9" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="533.1" cy="432.4" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="513.11" cy="606.21" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="447.65" cy="599.51" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="383.8" cy="593.39" r="5" />
                            </g>

                            {/* Y GREEN */}
                            <g id="Y_GREEN" data-name="Y GREEN">
                                <motion.polyline variants={logoAnimation} className="cls-7" points="677.55 371.07 768.87 502.28 773.04 502.28 774.86 645.28 843.78 614.26 843.78 501.4 935.81 371.4 855.98 371.4 806.68 443.39 751.96 371.07 677.55 371.07" />
                            </g>

                            {/* Y WHITE */}
                            <g id="Y_WHITE" data-name="Y WHITE">
                                <motion.polyline variants={logoAnimation} className="cls-4" points="800.42 440.93 751.96 371.07 677.55 371.07 768.87 502.28 781.94 502.28 781.94 541.4 774.86 548.56" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="773.94 567.4 793.93 550.4 793.93 464.13 855.98 371.4 935.81 371.4 843.78 501.4 843.78 576.42 805.9 607.94 800.42 612.09" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="773.94 587.94 810.92 557.53 810.92 470.35 820.77 456.4 845.34 456.4" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="810.92 438.27 872.85 438.27 872.85 412.4 883.61 401.65 883.61 371.07" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="856.89 437.42 856.89 416.36 826.91 416.36" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="846.89" y1="385.8" x2="866.85" y2="385.8" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="774.86 546.9 774.86 645.28 843.78 614.26 843.78 574.84" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="774.44 604.4 824.49 565.4 824.49 483.4 835.4 477.4" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="700.57 371.07 739.96 430.4 739.96 441.91 773.04 488.4" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="718.96 371.17 754.95 423.9 754.95 438.27 773.04 458.92 787.44 458.92" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="734.28" y1="371.41" x2="773.04" y2="432.4" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="910.96" y1="371.17" x2="910.96" y2="405.4" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="897.77 371.17 897.77 401.4 885.73 415.05 885.73 443.39" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="774.44" cy="432.9" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="773.94" cy="488.4" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="796.93" cy="614.26" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="838.01" cy="475.4" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="849.74" cy="456.4" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="784.57" cy="458.92" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="868.42" cy="385.8" r="5" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="774.86" y1="548.56" x2="774.86" y2="502.28" />
                            </g>

                            {/* R GREEN */}
                            <g id="R_GREEN" data-name="R GREEN">
                                <motion.path variants={logoAnimation} className="cls-7" d="M1198.67,508.8c33.54-5.62,58.58-33.95,59.96-67.06,1.46-34.88-23.7-66.4-58.98-72.88h-222.99l36.64,36.56,13.41,13.38v199.73s44.04-.6,44.04-.6l26.47.6v-100.76h36.96l55.14,95.51,104.94,27.52-95.59-132ZM1165.69,472.79h-61.71v-63.83h61.21c14.25,3.5,24.57,15.77,25.43,29.96.94,15.39-9.47,29.76-24.93,33.87Z" />
                            </g>

                            {/* R WHITE */}
                            <g id="R_WHITE" data-name="R WHITE">
                                <motion.polyline variants={logoAnimation} className="cls-4" points="976.66 369.47 1026.7 419.4 1026.7 618.54 1092.98 618.54 1042.65 563.97 1042.65 405.47 1011.63 405.47" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="997.75 391.58 1057.76 391.58 1057.76 526.08 1065.46 533.78 1065.46 557.91" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="1072.66 369.47 1072.66 517.49 1082.61 527.43 1082.61 589.9" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="1088.73 369.47 1088.73 516.36 1097.22 526.4" />
                                <motion.path variants={logoAnimation} className="cls-4" d="M1103.98,517.49v-136.03h99.3c.8-.12,11.74-1.64,19.37,6.83,7.2,8,5.21,18,5,18.99" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="1204.33" y1="395.33" x2="1103.98" y2="395.33" />
                                <motion.path variants={logoAnimation} className="cls-4" d="M1103.98,471.73l60.71-.32c15.06-3.53,25.4-17.27,24.63-32.14-.71-13.72-10.73-25.63-24.57-28.86h-59.41" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="1121 517.4 1121 481.4 1138.7 481.4 1138.7 506.9 1165.69 534.4 1165.69 572.4" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="1256.05" y1="418.06" x2="1172.06" y2="494.91" />
                                <motion.path variants={logoAnimation} className="cls-4" d="M1177.96,510.9l64.23-63.14" />
                                <motion.polyline variants={logoAnimation} className="cls-4" points="1218.65 621.22 1217.76 607.37 1182.41 572.4 1182.41 544.85 1196.67 544.85 1196.67 569.98 1234.34 607.66 1241.62 600.38 1241.62 579.43 1221.81 579.43 1213 571.4 1213.17 553.42" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="1284.1" y1="625.4" x2="1261.7" y2="618.54" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="1249.63" y1="473.7" x2="1219.64" y2="494.91" />
                                <motion.path variants={logoAnimation} className="cls-4" d="M1182.41,418.06c1.3-.29,5.79-1.12,10.4,1.34,6.6,3.52,7.74,10.73,7.85,11.53v17.48c-.15.88-.98,5.3-5,8-3.82,2.57-9.01,2.56-13.26,0" />
                                <motion.line variants={logoAnimation} className="cls-4" x1="1045.93" y1="619.26" x2="1026.7" y2="598.4" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="1065.83" cy="557.89" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="1213.63" cy="550.4" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="1170.18" cy="494" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="1177.96" cy="511.59" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="1244.9" cy="444.9" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="1204.66" cy="395.61" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="1226.65" cy="410.4" r="5" />
                                <motion.circle variants={logoAnimation} className="cls-3" cx="1257.52" cy="615.4" r="5" />
                                <motion.path variants={logoAnimation} className="cls-4" d="M1097.22,518.37h36.95l55.15,95.5,104.94,27.53-95.59-132c33.54-5.62,58.58-33.96,59.96-67.07,1.46-34.87-23.7-66.4-58.98-72.87h-222.99l36.64,36.56,13.41,13.38v156l44.05,43.13" />
                            </g>

                            {/* HANDS WHITE (The O/Globe part) */}
                            <g id="HANDS_WHITE" data-name="HANDS WHITE">
                                <g>
                                    <motion.polyline variants={logoAnimation} className="cls-4" points="1386.54 532.4 1353.56 533.85 1339.57 547.4 1314.39 547.6" />
                                    <motion.path variants={logoAnimation} className="cls-4" d="M1340.57,444.33s5.96,11.41,11.91,12.57l5.95,1.16,18.12-1.64,14,12.02" />
                                    <g>
                                        <motion.line variants={logoAnimation} className="cls-3" x1="1489.17" y1="412.39" x2="1489.17" y2="334.08" />
                                        <motion.line variants={logoAnimation} className="cls-3" x1="1506.02" y1="415.4" x2="1506.02" y2="370.87" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1505.47 395.33 1527.97 374.78 1527.97 347.92" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1524.46" y1="418.4" x2="1528.95" y2="403.35" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1536.74 425.41 1554.35 407.8 1554.35 390.61 1566.44 378.51" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1552.67 432.59 1576.42 410.87 1576.42 393.93 1591.64 378.7" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1566.43" y1="440.53" x2="1619.99" y2="393.69" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1573.93 449.41 1594.96 434.4 1632.84 418.93" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1580.34 465.89 1596.41 458.33 1617.89 456.79 1630.62 446.45" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1592.63 493.11 1616.23 491.74 1632.84 475.68 1669.31 474.77" />
                                        <motion.path variants={logoAnimation} className="cls-4" d="M1593.91,501.4l52.03.32" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1593.41" y1="511.4" x2="1682.38" y2="510.4" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1597.4" y1="524.42" x2="1639.37" y2="525.29" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1594.96 534.4 1622.38 534.29 1635.41 548.4 1669.86 547.89" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1588.41" y1="550.4" x2="1601.9" y2="550.47" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1581.71 560.17 1599.66 569.12 1616.39 569.4 1631.03 582.41" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1579.42" y1="568.4" x2="1588.42" y2="574.42" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1574.43 578.35 1605.4 598.11 1612.51 598.11 1633.53 609.42" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1563.87" y1="587.42" x2="1614.84" y2="630.84" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1553.43 595.17 1574.96 611.5 1585.46 645.2" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1540.45 603.41 1556.03 619.48 1556.05 636.3 1565.06 649.29" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1530.56 679.17 1531.45 649.4 1513.46 637.4 1507.72 615.68" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1499.55" y1="614.34" x2="1499.3" y2="658.49" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1491.47" y1="615.41" x2="1491.47" y2="687.91" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1473.48" y1="612.41" x2="1469.94" y2="658.73" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1465.45 610.76 1462 639.16 1449.63 648.11 1442.83 679.22" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1453.55" y1="605.49" x2="1446.17" y2="621.66" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1437.54 599.9 1418.96 617.4 1416.52 648.6" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1423.5 594.4 1403.52 605.4 1397.13 617.98 1391.54 645.2" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1411.86" y1="588.4" x2="1357.07" y2="633.39" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1402.56 575.4 1377.52 593.83 1360.2 594.41 1347.32 606.85" />
                                        <motion.polyline variants={logoAnimation} className="cls-4" points="1396.03 566.24 1383.76 569.11 1360.2 570.43 1346.57 583.03" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1334.12" y1="522.4" x2="1382.55" y2="519.59" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1295.61" y1="510.44" x2="1384.46" y2="510.4" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1330.58" y1="498.71" x2="1382.55" y2="498.98" />
                                        <motion.path variants={logoAnimation} className="cls-4" d="M1307.58,475.4c30.99,1.61,27.5.3,30.99,1.61l3.49,1.32,8.57,10.07,33.92,2.4" />
                                        <motion.path variants={logoAnimation} className="cls-4" d="M1388.54,480.68l-20.9-5" />
                                        <motion.path variants={logoAnimation} className="cls-4" d="M1343.68,420.4l5.28,3.47,5.61,4.41s12.48.12,19.99,2.62l7.5,2.5,19.49,19.01" />
                                        <motion.line variants={logoAnimation} className="cls-4" x1="1355.53" y1="391.4" x2="1409.54" y2="444.41" />
                                        <motion.path variants={logoAnimation} className="cls-4" d="M1383.83,379.87s6.34,22.53,20.52,38.54l14.18,16" />
                                        <motion.path variants={logoAnimation} className="cls-4" d="M1410.02,372.4s9.2,8.6,11.5,13.56l2.3,4.95v17.4l11.22,16.87" />
                                        <motion.path variants={logoAnimation} className="cls-4" d="M1451.69,346.24s-2.69,23.17,1.8,31.17l4.49,8,7.18,6,2.8,21.02" />
                                        <motion.path variants={logoAnimation} className="cls-4" d="M1478.92,372.4s-3.13,12.53,3.56,15.52l6.69,2.99" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1489.44" cy="334.08" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1528.44" cy="343.4" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1529.59" cy="400.91" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1506.02" cy="367.4" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1568.92" cy="377.33" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1593.3" cy="376.41" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1620.76" cy="391.75" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1637.38" cy="418.4" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1631.03" cy="446.45" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1674.52" cy="475.68" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1679.52" cy="508.94" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1648.84" cy="498.71" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1643.84" cy="525.26" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1670.87" cy="547.6" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1632.84" cy="581.9" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1604.52" cy="548.4" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1633.95" cy="608.53" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1617.05" cy="630.15" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1587.37" cy="646.07" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1567.39" cy="649.48" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1531.85" cy="679.46" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1502.47" cy="656.57" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1491.47" cy="686.94" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1468.77" cy="660.48" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1478.18" cy="371.42" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1452.44" cy="343.4" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1411.56" cy="372.18" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1383.55" cy="375.6" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1354.97" cy="390.61" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1344.2" cy="421.59" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1370.04" cy="474.77" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1337.8" cy="442.9" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1303.52" cy="474.74" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1294.26" cy="511.98" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1334.12" cy="522.4" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1311.59" cy="547.6" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1343.68" cy="584.33" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1346.06" cy="607.97" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1358.82" cy="634.4" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1391.54" cy="646.07" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1415.04" cy="650.25" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1444.51" cy="623.42" r="5" />
                                        <motion.circle variants={logoAnimation} className="cls-3" cx="1442.83" cy="679.22" r="5" />
                                        <motion.ellipse variants={logoAnimation} className="cls-4" cx="1488.23" cy="513.13" rx="96.69" ry="93.72" />
                                        <motion.ellipse variants={logoAnimation} className="cls-4" cx="1488.98" cy="513.09" rx="88.44" ry="84.81" />
                                        <motion.path variants={logoAnimation} className="cls-2" d="M1563.22,483.82l6.53,38.16c-6.68,2.08-13.68,3.02-20.42,4.84-2.22.6-7.43,1.7-9.14,2.77-1.25.79-2.56,6.47-6.06,8.48-1.24.71-3.49.77-4.2,1.47-.98.98-1.45,3.55-3.7,5.08-3.62,2.47-6.39.72-9,1.68-.9.33-2.65,3.56-5.79,4.43-4.27,1.18-5.56-.88-7.86-.77-.91.04-2.55,1.63-3.82,2.11-2.53.95-13.26,1.74-12.28-2.34.78-3.26,9.2.4,11.7-1.68-.8-1.57-3.21-.73-2.98-3.39.38-4.35,9.05,1.97,11.53,2.17,2.33.19,4.09-.18,5.57-2.18-.01-1.23-11.14-4.94-12.36-6.17-.94-.95-.91-2.9.4-3.35,4.95-1.71,20.64,14.01,24.93,3.03-4-1.32-12.37-3.7-15.53-6.27-1.28-1.05-1.5-3.05.02-3.57,2.35-.81,14.32,6.56,18.81,6.69,2.95.09,7.53-3.83,4.1-5.57-6.52-3.29-16.09-5.73-23.28-8.94-9.46-4.23-17.96-6.31-17.67-19.49-6.41,2.12-14.18,3.76-18.84-2.78-6.53-9.18,8.22-11.19,13.69-13.47,12.69-5.29,21.93-11.81,35.95-4.07,5.76,3.18,7.87,8.59,15.25,7.77,7.02-.78,15.33-4.47,22.22-5.13.83-.08,1.56-.1,2.23.5ZM1545.11,491.1c-2.34.35-5.14,1.68-7.45,1.81-7.13.4-11.61-6.8-17.87-9.54-12.37-5.4-18.06-.21-28.84,4.31-3.6,1.51-10.21,3.08-13.1,4.79s-1.59,3.24.55,4.7c7.2,4.93,20.29-6.11,29.46-.64,2.22,1.32,4.09,4.17,6.64,5.4,2.32,1.12,8.29,1.4,8.87,1.81.84.6.84,2.55,0,3.16-2.05,1.48-8.56-.51-10.82-1.69s-5.91-5.31-7.43-5.81c-2.84-.93-5.45.35-8.27.35-.46,5.1.57,10.79,5.3,13.3,11.75,4.25,23.08,9.74,35.03,13.34l13.28-4.14-5.34-31.17ZM1560.39,488.03c-.57-.57-11.35,1.69-11.71,2.84l5.26,30.57,11.81-2.88-5.36-30.53Z" />
                                        <motion.path variants={logoAnimation} className="cls-2" d="M1483.22,478.8c.36.61.18,2.87-.47,3.36-.87.65-3.61.1-4.98.33-8.7,1.47-13.83,9.36-22.73,9.22-.39,6.24,2.77,11.44,7.69,14.51.93.58,3.53,2.22,4.4,2.19,1.13-.03,1.95-1.77,3.18-2.19,3.16-1.07,7.06.12,9.13,2.85,5.55,7.32-6.45,17.76-12.49,6.94-.6-1.07-.4-2.57-1.33-3.55-.82-.87-3.13-1.43-4.3-2.29-5.82-4.32-10.34-9.84-10.51-17.73l-9.85-1.28-5.94,29.65c1.65,1.5,9.95-.99,10.52-1.94.56-.93-.59-3.65,1.25-6.42,5.87-8.8,18.06,3.94,9.13,10.22-4.45,3.13-7.71-1.82-11.48.92-1.39,1.01,1.98,2.12,1.81,4.32-.32,4.12-6.04-1.4-7.96-2.18-6.92-2.82-15.98-4.1-23.28-6.47-2.4-.78-7.11-1.33-5.6-4.64,1.04-2.29,3.84-.08,5.59,0,.39-1.79,1.12-8.08,2.76-8.61,2.17-.7,14.55,4.68,15.5,3.65-.58-1.71,1.8-7.02,1.13-8-.22-.32-6.75-1.99-7.23-1.93-.22.02-1.66,2.34-3.3,2.84-5.95,1.81-11.25-5.19-7.94-10.83,2.86-4.87,9.97-3.42,11.89,1.69.29.77-.03,2.32.19,2.57.26.31,6.55.9,7.61,1.9l1.13-8.61c-.49-.6-12.45-2.83-14.63-4.11-1.44-.84-1.85-3.41-.23-3.94s18.75,5.32,22.44,5.97c5.81,1.01,10.39,1.42,16.02-.77,4.28-1.66,7.94-5.56,12.24-6.94,1.67-.53,9.75-2.21,10.64-.71ZM1423.7,493.73c-4.27-4.45-8.94,6.26.06,4.71.69-1.28.98-3.63-.06-4.71ZM1476.1,510.44c-3.2-3.37-8.22,1.91-5.02,5.28,3.2,3.37,8.22-1.91,5.02-5.28ZM1431.5,519.59c-.23-1.74,1.5-4.6,0-5.9s-9.48-2.22-11.77-3.4c-.04.97-1.37,5.23-1.16,5.53.58.84,11.06,3.35,12.93,3.77ZM1451.35,513.48c-3.4.97-2.82,7.54,2.1,5.98,3.22-1.02,1.25-6.94-2.1-5.98Z" />
                                        <motion.path variants={logoAnimation} className="cls-2" d="M1467.22,534.64c.66.6,2.36,4.11,2.83,4.12,1.34.05,4.5-5.91,9.12.32,2.09,2.82,1.2,4,1.91,6.66.39,1.47,2.3,2.89,2.67,4.61.97,4.52-1.27,6.99-5.03,8.68-5.91,2.65-7.53-4.62-8.66-4.72-.92-.08-2.03,2.33-5.55.19-1.72-1.04-2.41-3.53-3.6-4.25s-2.86-.5-4.4-1.57c-1.37-.94-2.33-3.58-3.23-4.04-1.35-.69-2.82,0-4.69-1.26-1.42-.95-3.58-4.94-3.45-6.63.22-2.69,4.31-6.21,6.69-6.62,5.67-.98,6.62,4.76,7.61,4.85,1.16.11,3.84-3.87,7.77-.35ZM1452.54,533.91c-5.8,1.47-2.81,9.92,2.14,4.79,2.22-2.31-.36-5.24-2.14-4.79ZM1464.94,537.67c-1.38-.84-7.69,3.03-8.04,3.67-.75,1.34,1.28,4.76,3.6,4.13,1.07-.29,5.77-3.89,5.74-5.14,0-.37-1.12-2.56-1.3-2.66ZM1473.74,540.74c-.77.21-8.69,6.03-9.01,6.72-.73,1.57,1.23,4.3,3.68,3.23.87-.38,8.51-5.84,8.75-6.34.74-1.48-1.37-4.16-3.42-3.6ZM1479.06,549.44c-1.93-1.16-5.62,1.31-5.06,3.73,1.05,4.53,6.92,1.35,6.2-1.52-.08-.32-1.03-2.14-1.14-2.21Z" />
                                        <motion.path variants={logoAnimation} className="cls-1" d="M1560.85,516.95c1.4-1.47.4-3.16-1.36-3.55-4.87-1.07-1.73,6.79,1.36,3.55Z" />
                                        <motion.path variants={logoAnimation} className="cls-2" d="M1560.85,516.95c-3.1,3.24-6.23-4.61-1.36-3.55,1.76.39,2.77,2.07,1.36,3.55Z" />
                                    </g>
                                </g>
                            </g>

                        </motion.g>
                    </svg>
                </motion.div>

                {/* Loading Text Overlay */}
                <motion.div
                    className="absolute bottom-[20vh] left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-[#00E08F] text-lg tracking-[0.5em] font-medium">INITIALIZING</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
