import React from "react"
import styles from "./CardSection.module.css"

interface CardSectionProps {
    titulo: string
    children: React.ReactNode
}

function CardSection({ titulo, children}: CardSectionProps) {
    
    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>{titulo}</h2>
            {children}
        </section>
    )
}

export default CardSection