import { Collapse, CollapseProps } from 'antd'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { CSSProperties } from 'react'

export default function FAQ() {
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
        <div className='donate-faq-container container'>
            <h1 className='faq-header'>Kóp beriletuǵın sorawlar</h1>
            <Collapse
                bordered={false}
                accordion={true}
                size="large"
                className='donate-faq-collapse'
                items={getItems(panelStyle)}
            />
            <p>Qosımsha sorawlarıńız bolsa, +998 93 362 57 44 nomerine xabarlasqan halda juwap alasız.</p>
        </div>
    )
}


const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '1',
        label: 'Audiokitaplardı qalay tıńlasam boladı?',
        children: <p className='text-style'>
            <Link to="/">Booky.uz</Link> saytı arqalı buyırtpa beriw ańsat.
            <br/>
            <br/>
            Tómende bunı tolıq túsindirip beremiz.
            <br/>
            <br/>
            Kóbirek imkaniyatlarǵa iye bolıw ushın “Jeke kabinet” bóliminde dizimnen ótiń. Dizimnen ótiw Buyırtpa beriw
            haqqında maǵlıwmat alıwdan aldın, bir neshe kerekli ámellerdi orınlap alayıq. Saytımızda dizimnen ótiw ushın
            tómendegi izbe-izlikte orınlań:
            <br/>
            <br/>
            <strong>• “Dizimnen ótiw”</strong> bólimine kirip, atı familyańız hám telefon nomerińizdi kirgiziń. Soń
            parol kirgiziń. Bunnan keyin "Dizimnen ótiw" túymesin basıń.
            <br/>
            <br/>
            • Arnawlı kod siziń nomerińizge SMS-xabar arqalı baradı. Onı kirgizgennen soń “Kiriw" túymesin basasız.
            <br/>
            <br/>
            • “Ózgerislerdi saqlań” túymesin basqanıńızdan soń siz saytımızda dizimnen ótesiz. Qutlıqlaymız, siz endi
            keń imkaniyatqa iye qariydarlarımız qatarına qosıldıńız. Maǵlıwmatlardı ózińiz qálegen waqıtta “Jeke
            kabinet” arqalı jańalawıńız múmkin.
        </p>,
        style: panelStyle
    },
    {
        key: '2',
        label: 'Audiokitaplar janrlarǵa bólingen be?',
        children: <p className='text-style'>
            Álbette! Audiokitaplar 5 úlken janrlarǵa bólingen. Bular tómendegishe:
            <br/>
            <br/>
            1. Jáhán ádebiyatı
            <br/>
            <br/>
            2. Ózbek ádebiyatı
            <br/>
            <br/>
            3. Qaraqalpaq ádebiyatı
            <br/>
            <br/>
            4. Qaraqalpaq folklorı
            <br/>
            <br/>
            5. Qısqa audiokitaplar
        </p>,
        style: panelStyle
    },
    {
        key: '3',
        label: 'Kitaplardıń audio variantınan tısqarı jáne qanday túrleri jaratılǵan?',
        children: <p className='text-style'>
            Platformada kitaplardıń elektron formatları da jaylastırılǵan. Audiolar menen tikkeley
            elektron variantların paydalansańız da boladı.
        </p>,
        style: panelStyle
    },
    {
        key: '4',
        label: 'Audiolardı telefonıma saqlap alsam bola ma?',
        children: <p className='text-style'>
            Audiokitaplardı saqlap alıwdıń imkaniyatı joq. Olardı tek platforma hám android variantlarında
            tıńlay alasız.
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