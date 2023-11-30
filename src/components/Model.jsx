import React from 'react'
import { Page, Text, Document, StyleSheet, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 10,
    },
    container: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    flag: {
        width: 50,
        height: 30,
        marginRight: 10,
    },
    // Ajoutez d'autres styles selon vos besoins
});

const Model = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    {/* Vérifie que les données nécessaires sont disponibles avant d'afficher le drapeau du pays */}

                    <View>
                        <Text>
                            daniel
                        </Text>
                        {/* Ajoutez d'autres éléments Text ou Image selon vos besoins */}
                    </View>
                </View>
                {/* Ajoutez d'autres éléments Page selon votre mise en page PDF */}
            </Page>
        </Document>
    )
}

export default Model