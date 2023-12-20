import React from 'react'
import { Document, Page, View, Text, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { FUNCTIONS } from '../static/others'
import images from '../assets/images'


const CardResto = () => {
    return (
        <View style={styles.recto}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 70,
                alignItems: 'center',

            }} >
                <Text style={{
                    fontSize: '10px',
                    width: '70%'
                }} >
                    23 ième championnats d’Afrique d’athlétisme Senior « Douala 24 »
                </Text>
                <Image source={images.logo} />
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
            }}

            >
                <View>
                    <Image style={{
                        width: 70,
                        height: 70,
                        objectFit: 'cover'
                    }} source={images.logoCrtv} />
                </View>
                <View style={{ marginLeft: 10 }} >
                    <Text style={styles.textSmall} > Tiomela jou </Text>
                    <Text style={styles.textSmall} > Daniel </Text>
                    <Text style={styles.textSmall} > Délégation </Text>
                    <Text style={styles.textSmall} > RD Congo </Text>
                    <Image style={{
                        width: 30,
                        height: 20,
                        objectFit: 'cover',
                        marginTop: 5
                    }} source={images.logoCrtv} />
                </View>

            </View>
            <Text style={{ marginHorizontal: 'auto', marginTop: 10 }} > COMPETITOR </Text>
        </View>
    )
}

const CardVerso = () => {
    return (
        <View style={{ ...styles.recto, position: 'relative' }} >

            <View style={{ display: "flex", flexDirection: 'row', fontSize: 7, lineHeight: 1.6 }}>
                <View style={{ width: '50%' }}>
                    <Text>1 : Tribune présidentielle</Text>
                    <Text>2 : Tribune officielle</Text>
                    <Text>3 : échauffement et coulisses</Text>
                    <Text>4 : Terrains, piste, salles</Text>
                    <Text>5 : Zone mixte</Text>
                </View>
                <View style={{ width: '50%' }}>
                    <Text>6 : Centre et tribune de presse</Text>
                    <Text>7 : Zone télévision</Text>
                    <Text>8 : Centre médical</Text>
                    <Text>9 : Tribune participants</Text>
                    <Text>10 : Direction des épreuves</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '100%', marginTop: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                    <Image src={images.logoOrange} style={{ width: '40px' }} />
                    <Image src={images.logoCrtv} style={{ width: '40px' }} />
                    <Image src={images.logoMadiba} style={{ width: '40px' }} />
                    <Image src={images.logoPmuc} style={{ width: '40px' }} />
                    <Image src={images.logoPrudential} style={{ width: '40px' }} />
                </View>
            </View>
            <View style={styles.comment}>
                <Text>
                    La carte d'accréditation demeure la propriété du CIJF et peut m'être retirée avec effet immédiat à la seule discrétion du CIJF. En faisant usage de cette carte, j'accepte d'être filmé notamment par la télévision, photographié identifié ou enregistré de toute autre manière pendant les jeux de la Francophonie, dans les conditions et pour les fins autorisées actuellement ou à l'avenir par le CIJF pour la promotion des Jeux. J'accepte de n'utiliser que mon usage personnel, et à des fins non commerciales, les photographies que je prendrai et les films que je réaliserai pendant les compétitions, y compris celles et ceux sur les stades sauf autorisation écrite préalable du CIJF.
                </Text>
            </View>
        </View>
    )
}

const CardTemplate1 = ({ data, logo, countrieFlags, images }) => {
    const FirstPrivilege = [1, 2, 3, 4, 5]
    const FirstPrivilege2 = [6, 7, 8, 9, 10]
    return (
        <Document  >
            <Page size="A4" style={{ ...styles.flex, height: '100%', gap: 20, padding: 20 }} wrap={true} >
                <CardResto />
                <CardResto />
                <CardResto />
                <CardResto />
                <CardResto />
            </Page>

            <Page size="A4" style={{ ...styles.flex, height: '100%', gap: 20, padding: 20 }} wrap={true} >

                <CardVerso />
                <CardVerso />
                <CardVerso />
                <CardVerso />
                <CardVerso />
                <CardVerso />


            </Page>
        </Document>

    )
}



const styles = StyleSheet.create({
    recto: {
        width: "47%",
        border: '1px solid ',
        height: '47%',
        backgroundColor: '#efe',
        padding: 20
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '5',
        flexWrap: 'wrap'
    },
    textSmall: {
        fontSize: '10px',
    },
    comment: {
        fontSize: '7px',
        position: 'absolute', bottom: 2,
        padding: 15, width: '120%',
        marginHorizontal: 'auto',
        textAlign: 'justify',
        right: 0,
        left: 0,
        lineHeight: 1.6
    }
    // ... Autres styles nécessaires
});
export default CardTemplate1