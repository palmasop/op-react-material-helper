import React from 'react';
import {Typography, Stack, Container, Button} from '@mui/material';
import {Box} from "@mui/system";

export const FontSizeVisualizer = () => {
    return (
        <Container>
            <Stack direction="row" mt={8} mb={8}>
                <Stack spacing={6} flex={2}>
                    <div>
                        <Typography variant="h1">This is H1</Typography>
                        <Typography variant="body1" style={{marginTop: '8px'}}>Sample text for H1. This is a longer
                            description to provide more context and visualization.</Typography>
                        <Typography variant="body2" style={{marginTop: '6px'}}>Further details or annotations related to
                            H1.</Typography>
                    </div>
                    <div>
                        <Typography variant="h2">This is H2</Typography>
                        <Typography variant="body1" style={{marginTop: '8px'}}>Sample text for H2. Descriptions help in
                            understanding the font size context.</Typography>
                        <Typography variant="body2" style={{marginTop: '6px'}}>Annotations for H2.</Typography>
                    </div>
                    <div>
                        <Typography variant="h3">This is H3</Typography>
                        <Typography variant="body1" style={{marginTop: '8px'}}>Sample text for H3. Demonstrating how
                            this
                            header might be used in context.</Typography>
                        <Typography variant="body2" style={{marginTop: '6px'}}>Further annotations or descriptions for
                            H3.</Typography>
                    </div>
                    <div>
                        <Typography variant="h4">This is H4</Typography>
                        <Typography variant="body1" style={{marginTop: '8px'}}>Sample text for H4. Useful for
                            understanding
                            its potential application.</Typography>
                        <Typography variant="body2" style={{marginTop: '6px'}}>Annotations pertaining to
                            H4.</Typography>
                    </div>
                    <div>
                        <Typography variant="h5">This is H5</Typography>
                        <Typography variant="body1" style={{marginTop: '8px'}}>Sample text for H5. Displaying it within
                            a
                            realistic content scenario.</Typography>
                        <Typography variant="body2" style={{marginTop: '6px'}}>Additional notes or context for
                            H5.</Typography>
                    </div>
                    <div>
                        <Typography variant="h6">This is H6</Typography>
                        <Typography variant="body1" style={{marginTop: '8px'}}>Sample text for H6. Showcasing how this
                            might
                            be used in actual content.</Typography>
                        <Typography variant="body2" style={{marginTop: '6px'}}>Descriptions or details related to
                            H6.</Typography>
                    </div>
                </Stack>
                <Stack spacing={6} flex={1}>
                    <div>
                        <Typography variant="overline">Overline Section</Typography>
                        <Typography variant="body1" style={{marginTop: '8px'}}>Highlighting our top stories of the
                            month.</Typography>
                    </div>
                    <Box mt={3}>
                        <Button variant="contained" color="primary">
                            <Typography variant="button">Button</Typography>
                        </Button>
                    </Box>
                    <div>
                        <Typography variant="caption">Caption Section: October 10, 2023</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" style={{fontWeight: '500'}}>This is Subtitle
                            1</Typography> {/* Increased weight for differentiation */}
                        <Typography variant="body1" style={{marginTop: '8px'}}>Sample text for Subtitle 1. A brief
                            description can be valuable.</Typography>
                        <Typography variant="body2" style={{marginTop: '6px'}}>Further notes on Subtitle
                            1.</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle2">This is Subtitle 2</Typography>
                        <Typography variant="body1" style={{marginTop: '8px'}}>Description for Subtitle 2.
                            Contextual
                            information can be beneficial.</Typography>
                        <Typography variant="body2" style={{marginTop: '6px'}}>Additional notes for Subtitle
                            2.</Typography>
                    </div>
                </Stack>
            </Stack>
        </Container>
    )
};