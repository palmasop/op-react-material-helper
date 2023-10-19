import React from 'react';
import {Typography, useTheme} from '@mui/material';
import {Stack, Box} from "@mui/system";

type ColorData = {
    main: string;
    contrastText?: string;
    light?: string;
    dark?: string;
}

type ColorBlockProps = {
    colorName: string;
    colorData: ColorData;
    width?: string | number;
    height?: string | number;
}

const ColorBlock: React.FC<ColorBlockProps> = ({colorName, colorData, width, height = 1}) => (
    <Box
        width={width}
        height={height}
        bgcolor={colorData.main}
        p={1}
        m={0.5}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
    >
        <Typography variant="body2" style={{color: colorData.contrastText}}>
            {colorName}
        </Typography>
        <Typography variant="caption" style={{color: colorData.contrastText}}>
            {colorData.main}
        </Typography>
    </Box>
);

export const ColorPaletteVisualizer: React.FC = () => {
    const theme = useTheme();

    return (
        <Stack spacing={5} flex={1} m={4} mt={8} mb={8}>
            <Stack direction="row" flex={1} spacing={5}>
                <ColorBlock colorName='Primary' colorData={theme.palette.primary} width="50%"/>

                <ColorBlock colorName='Secondary' colorData={theme.palette.secondary} width="35%"/>

                <ColorBlock colorName='Background Paper' colorData={{
                    main: theme.palette.background.paper,
                }} width="20%"/>
            </Stack>

            <Stack direction="row" flex={1} spacing={5}>
                <Stack direction="row" p={2} flex={4} spacing={4}>
                    <Box flex={1} bgcolor={theme.palette.background.paper}>
                        <Stack spacing={2} p={2} pr={0}>
                            <ColorBlock colorName='Info' colorData={theme.palette.info} width={1}/>
                            <ColorBlock colorName='Success' colorData={theme.palette.success} width={1}/>
                            <ColorBlock colorName='Warning' colorData={theme.palette.warning} width={1}/>
                            <ColorBlock colorName='Error' colorData={theme.palette.error} width={1}/>
                        </Stack>
                    </Box>
                    <Box flex={1} p={2} bgcolor={theme.palette.background.paper}>
                        <Box flex={1} bgcolor={theme.palette.secondary.main}>
                            <Stack spacing={2} p={2} pr={0}>
                                <ColorBlock colorName='Info' colorData={theme.palette.info} width={1}/>
                                <ColorBlock colorName='Success' colorData={theme.palette.success} width={1}/>
                                <ColorBlock colorName='Warning' colorData={theme.palette.warning} width={1}/>
                                <ColorBlock colorName='Error' colorData={theme.palette.error} width={1}/>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>

                <Box flex={2} bgcolor={theme.palette.background.paper} p={2}>
                    <ColorBlock colorName='Secondary' colorData={theme.palette.secondary} width={1}/>
                </Box>

                <Box flex={4} bgcolor={theme.palette.background.paper} p={2}>
                    <ColorBlock colorName='Primary' colorData={theme.palette.primary} width={1}/>
                </Box>
            </Stack>
        </Stack>
    );
}