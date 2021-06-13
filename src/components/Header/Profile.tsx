import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData &&
                <Box mr="4" textAlign="right">
                    <Text>Jaime Lay</Text>
                    <Text color="gray.300" fontSize="small">
                        me@jaimelay.dev
                    </Text>
                </Box>
            }

            <Avatar size="md" name="Jaime" src="https://github.com/jaimelay.png" />
        </Flex>
    );
}