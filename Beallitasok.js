import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    header: 'Preferences',
    icon: 'settings',
    items: [
      { icon: 'globe', color: '#fe9400', label: 'Language', type: 'link' },
      {
        icon: 'moon',
        color: '#007afe',
        label: 'Dark Mode',
        value: false,
        type: 'boolean',
      },
      {
        icon: 'wifi',
        color: '#007afe',
        label: 'Use Wi-Fi',
        value: true,
        type: 'boolean',
      },
    ],
  },
  {
    header: 'Help',
    icon: 'help-circle',
    items: [
      { icon: 'mail', color: '#007afe', label: 'Contact Us', type: 'link' },
    ],
  }
];


export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>
            {items.map(({ label, icon, type, value, color }, index) => {
              return (
                <TouchableOpacity
                  key={label}
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.row}>
                    <View style={[styles.rowIcon, { backgroundColor: color }]}>
                      <FeatherIcon color="#fff" name={icon} size={18} />
                    </View>

                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={styles.rowSpacer} />

                    {type === 'boolean' && <Switch value={value} />}

                    {type === 'link' && (
                      <FeatherIcon
                        color="#fff"
                        name="chevron-right"
                        size={22}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    backgroundColor: "#000000"
  },
  section: {
    paddingHorizontal: 24,
    backgroundColor: "#000000"
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#7430a1',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#7430a1',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#ffff',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});