import React from 'react';
import {
    AboutSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Lager devs - Software Factory" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="nosotros" heading="Sobre Nosotros" />
                <InterestsSection sectionId="servicios" heading="Servicios" />
                <ProjectsSection sectionId="clientes" heading="Nuestros clientes" />
                <ContactSection sectionId="contacto" heading="Contactanos" />
            </Page>
        </>
    );
}
