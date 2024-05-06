import { Collapse, CollapseProps } from 'antd'
import { useMediaQuery } from 'react-responsive'
import { CSSProperties } from 'react'

import donateImg from "../../public/donate.png"

export default function Donate() {
    const isMobile = useMediaQuery({ query: '(max-width: 544px)' })

    const panelStyle = {
        marginBottom: 24,
        backgroundColor: '#d7e7f8',
        borderRadius: '1.6rem',
        border: 'none',
        fontSize: isMobile ? '1.4rem' : '2rem',
        fontWeight: 600,
    }

    return (
        <div className='container'>
            <div className='donate-text-img-container'>
                <div>
                    <h1 className='donate-header'>
                        Jańa shoqqılardı birgelikte iyeleyik!
                    </h1>
                    <p className='donate-text'>
                        Biz, jańadan ashılǵan «Booky» qaraqalpaq tilindegi audiokitarlar platforması, siz sıyaqlı
                        keńpeyil hám qayır saqawatlı insanlardıń járdemine súyenemiz. Eger usı sózlerdi oqıp atırǵanlar
                        keminde 20 mıń somnan qayır-saqawat qılsa, joybar jumısları 2 jıl ishinde óz juwmaǵına jetedi.
                        Sizden joybardı qollap-quwatlawıńızdı soraymız hám bunıń menen siz Qaraqalpaq tiliniń
                        rawajlanıwına úlken úles qosqan bolasız.
                    </p>
                </div>
                <img src={donateImg} alt="donate" className='donate-img'/>
            </div>
            <div className='donate-faq-container' >
                <h1>Soraw-juwap</h1>
                <Collapse
                    bordered={false}
                    accordion={true}
                    size='large'
                    className='donate-faq-collapse'
                    items={getItems(panelStyle)}
                />
                <p>Qosımsha sorawlarıńız bolsa, +998 93 362 57 44 nomerine xabarlasqan halda juwap alasız.</p>
            </div>
        </div>
    )
}



const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '1',
        label: 'Puldan tısqarı qanday járdem bere alaman?',
        children: <p className='text-style'>
            - Jámáátimizge ıqtıyarlı, awdarmashı, dublyaj aktyorı sıpatında járdem beriwińiz múmkin. Jámáátimizge
            qosılıw ushın (____) bul jerdi basıń.
        </p>,
        style: panelStyle
    },
    {
        key: '2',
        label: 'Sırt ellerden de pul jibere alaman ba?',
        children: <p className='text-style'>
            - Awa, álbette mine usı silteme arqalı tóleseńiz boladı.
        </p>,
        style: panelStyle
    },
    {
        key: '3',
        label: 'Qárejetler smetası bar ma?',
        children: <p className='text-style'>
            - Awa, biz hár ayda finanslıq esabat berip baramız. Olardı tómendegi kesteden tabıwıńız múmkin.
        </p>,
        style: panelStyle
    },
    {
        key: '4',
        label: 'Naq pulda qayır-saqawat qılsam bola ma?',
        children: <p className='text-style'>
            - Yaq. Biz qayır-saqawattı tek ǵana Click, Payme qosımshaları Visa, mastercard sistemaları hám bank arqalı
            qabıl etemiz.
        </p>,
        style: panelStyle
    },
    {
        key: '5',
        label: 'Audiokitaplardı qalay satıp alamız?',
        children: <p className='text-style'>
            Saytımızda ózińizge unaǵan kitaptı tańlap, "Satıp alıw" túymesin basasız. Soń tólemdi Payme, Click, Bank
            kartaları arqalı ámelge asırasız.
        </p>,
        style: panelStyle
    }
]