// _components/users/InputSearchBar/InputSearchBar.tsx

'use client'

import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

export function InputSearchBar(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="sm"
      size="md"
      placeholder="Search books"
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color="yellow" variant="filled">
          <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
  );
}