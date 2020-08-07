import React from 'react';
import socialMedia from "../../../data/socialMedia.json";

import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<h4 className="text-primary"> Ready to take the next step and work together? </h4>
							<ButtonDefault href="mailto:abdali.dahir@gmail.com"> Contact me </ButtonDefault>
						</div>
					</FooterBody>
					<div className="box">
						<SubRight> Good design doesn't date. Bad design does. </SubRight>
						<CopyRight className="text-dark">
							© 
							<span> {new Date().getFullYear()}, Built with {` `} 
								<a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
          		</span> 
							Copyright 2020 by Abdelali Dahir </CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;