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
                <AboutSection sectionId="about" heading="Sobre Nosotros" />
                <InterestsSection sectionId="details" heading="Servicios" />
                <ProjectsSection sectionId="features" heading="Nuestros clientes" />
                <ContactSection sectionId="github" heading="Contactanos" />
            </Page>
        </>
    );
}
