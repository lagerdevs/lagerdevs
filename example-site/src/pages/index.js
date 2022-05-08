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
            <Seo title="Lager Devs" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="nosotros" heading="Sobre nosotros" />
                <InterestsSection sectionId="servicios" heading="Servicios" />
                <ProjectsSection sectionId="clientes" heading="Nuestros clientes" />
                <ContactSection sectionId="contacto" heading="Contactanos" />
            </Page>
        </>
    );
}
